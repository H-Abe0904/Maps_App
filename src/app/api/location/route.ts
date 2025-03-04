import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres"; // Vercel の PostgreSQL を使用する場合

/**
 * 
 * @returns {Promise<NextResponse>}
 */
export async function GET() {
  try {
    const result = await sql`SELECT id, latitude, longitude FROM locations;`;
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch locations" }, { status: 500 });
  }
}
