import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password } = body;
    if (!email || !password || !password) {
      return new NextResponse(" Missing info ,", { status: 404 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse ("Internal Error" , {status:500})
  }
}
