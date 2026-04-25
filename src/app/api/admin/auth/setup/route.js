import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { email, password, setupKey } = await request.json();
    if (setupKey !== (process.env.SETUP_KEY || 'meghana-setup-2024')) {
      return NextResponse.json({ error: 'Invalid setup key' }, { status: 403 });
    }
    const existing = await prisma.adminUser.count();
    if (existing > 0) {
      return NextResponse.json({ error: 'Admin already exists' }, { status: 400 });
    }
    const hashed = await bcrypt.hash(password, 12);
    const user = await prisma.adminUser.create({ data: { email, password: hashed } });
    return NextResponse.json({ success: true, id: user.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
