import { AuthActions } from "@/actions/auth-actions/auth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const data = await req.json();
        const result = await AuthActions.register(data);

        if (result.success) {
            return NextResponse.json({
                message: "User created successfully",
                user: result.data
            }, { status: result.status });
        } else {
            return NextResponse.json({
                error: result.error
            }, { status: result.status });
        }
    } catch (error) {
        console.error('Error in register route:', error);
        return NextResponse.json({
            error: "Invalid request data"
        }, { status: 400 });
    }
}