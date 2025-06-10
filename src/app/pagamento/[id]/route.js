import db from "@/lib/db"
import { NextResponse } from "next/server" 

export async function GET() {
    const result = await db.query('SELECT * from pagamento')
    return NextResponse.json(result.rows)
}