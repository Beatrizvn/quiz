import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
  const { username, password, gender  } = await request.json();
  
  try {
    const user = await prisma.user.create({
      data: { username, password, gender },
    });
    return NextResponse.json(user);
  } catch (error) {
    return new Response(JSON.stringify({ error: ` Erro ao criar usuário ${error}`}), { status: 500 });
  }
}
