import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';

function authCheck(request) {
  const token = getTokenFromRequest(request);
  return token ? verifyToken(token) : null;
}

export async function GET(request, { params }) {
  const { id } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const service = await prisma.service.findUnique({ where: { id: Number(id) } });
  if (!service) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(service);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const data = await request.json();
    delete data.id; delete data.createdAt; delete data.updatedAt;
    const service = await prisma.service.update({ where: { id: Number(id) }, data });
    revalidateTag('services');
    return NextResponse.json(service);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await prisma.service.delete({ where: { id: Number(id) } });
  revalidateTag('services');
  return NextResponse.json({ success: true });
}
