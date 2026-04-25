import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';

function authCheck(r) { const t = getTokenFromRequest(r); return t ? verifyToken(t) : null; }

export async function GET(request, { params }) {
  const { id } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const doctor = await prisma.doctor.findUnique({ where: { id: Number(id) } });
  if (!doctor) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(doctor);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const data = await request.json();
    delete data.id; delete data.createdAt;
    const doctor = await prisma.doctor.update({ where: { id: Number(id) }, data });
    revalidateTag('doctors');
    return NextResponse.json(doctor);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await prisma.doctor.delete({ where: { id: Number(id) } });
  revalidateTag('doctors');
  return NextResponse.json({ success: true });
}
