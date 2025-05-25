import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Invalid username' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('nextjs-mongodb-demo');
    const collection = db.collection('users');

    await collection.insertOne({name});

    return NextResponse.json({ message: 'Username saved' }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
