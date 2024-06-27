import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export function middleware(req) {
    console.log("tello mutebi nuhu")
  const { cookiess } = req;
  const token = cookiess.token;

  if (!token) {
    return NextResponse.redirect('/login');
  }

  try {
    jwt.verify(token, secret);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect('/login');
  }
}