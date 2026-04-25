import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import prisma from '@/lib/prisma';
import { getTokenFromRequest, verifyToken } from '@/lib/auth';

function authCheck(r) { const t = getTokenFromRequest(r); return t ? verifyToken(t) : null; }

export async function GET(request) {
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const rows = await prisma.siteSetting.findMany();
  const obj = {};
  rows.forEach(r => { obj[r.settingKey] = r.settingValue; });
  return NextResponse.json(obj);
}

export async function POST(request) {
  if (!authCheck(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const data = await request.json();
    await Promise.all(
      Object.entries(data).map(([key, value]) =>
        prisma.siteSetting.upsert({
          where: { settingKey: key },
          update: { settingValue: String(value ?? '') },
          create: { settingKey: key, settingValue: String(value ?? '') },
        })
      )
    );
    revalidateTag('settings');
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
