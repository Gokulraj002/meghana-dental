import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rows = await prisma.siteSetting.findMany();
    const obj = {};
    rows.forEach(r => { obj[r.settingKey] = r.settingValue; });
    return NextResponse.json(obj);
  } catch {
    return NextResponse.json({});
  }
}
