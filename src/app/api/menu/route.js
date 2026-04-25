import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const where = { isActive: true };
    if (location) where.location = location;
    const items = await prisma.menuItem.findMany({
      where,
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json(items);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
