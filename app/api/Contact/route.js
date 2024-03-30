import { NextResponse } from "next/server"
import prisma from "@/lib/prisma";

export async function POST(request){
    const res = await request.json()
    const {name, email, message} = res;
    
    const result = await prisma.Response.create({
        data:{
            name,
            email,
            message
        }
    })
    return NextResponse.json({res})
}