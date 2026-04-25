import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { pageKey } = await params;
  try {
    const item = await prisma.seoMeta.findUnique({ where: { pageKey } });
    return NextResponse.json(item);
  } catch {
    return NextResponse.json(null, { status: 200 });
  }
}
