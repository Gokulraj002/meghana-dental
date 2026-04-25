import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';

function authCheck(r) { const t = getTokenFromRequest(r); return t ? verifyToken(t) : null; }

export async function PUT(request, { params }) {
  const { id } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const data = await request.json();
    delete data.id; delete data.createdAt;
    const item = await prisma.partner.update({ where: { id: Number(id) }, data });
    revalidateTag('partners');
    return NextResponse.json(item);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await prisma.partner.delete({ where: { id: Number(id) } });
  revalidateTag('partners');
  return NextResponse.json({ success: true });
}
