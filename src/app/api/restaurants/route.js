import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db"
import { restaurantSchema } from "@/app/lib/restaurantsModels"

export async function GET(res) {
    await connectDB();
    const data = await restaurantSchema.find();
    console.log(data);
    return NextResponse.json({ result: true })
}

export async function POST(requset) {
    try {
        let payload = await requset.json();
        await connectDB();
        const schemaRestaurents = new restaurantSchema(payload);
        const result = await schemaRestaurents.save();
        return NextResponse.json({ result: result, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: "something went wrong", success: false }, { status: 404 })
    }
}