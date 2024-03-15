import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db"
import { restaurantSchema } from "@/app/lib/restaurantsModels"

export async function GET(res) {
    await connectDB();
    const data = await restaurantSchema.find();
    console.log(data);
    return NextResponse.json({ result: true })
}

export async function POST(request) {
    try {
        let payload = await request.json();
        await connectDB();
        let result;
        let success = false;
        let status = 500;
        if (payload.login2) {
            result = await restaurantSchema.findOne({ email: payload.login.email, password: payload.login.password });
            if (result){
                success = true;
                status = 200;
            }
        }
        else {
            const schemaRestaurents = new restaurantSchema(payload);
            result = await schemaRestaurents.save();
            if (result){
                success = true;
                status = 200;
            }
        }
        return NextResponse.json({ result: result, success}, { status: status })
    } catch (error) {
        return NextResponse.json({ error: "something went wrong", success: false }, { status: 404 })
    }
}