import { NextRequest,NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import {FoodsSchema} from "@/app/lib/foodModels"

export async function POST(request:NextRequest){
    try {
        connectDB();
        const payLoad = await request.json();
        const data = new FoodsSchema(payLoad);
        const result = await data.save();
        return NextResponse.json({result},{status:200});
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:400});
    }
}