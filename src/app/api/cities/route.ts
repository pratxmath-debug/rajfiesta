import { NextResponse } from "next/server";
import { CITIES } from "@/data/rajasthanData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search")?.toLowerCase();

  let results = CITIES;
  if (search) {
    results = results.filter(
      (c) =>
        c.name.toLowerCase().includes(search) ||
        c.nickname.toLowerCase().includes(search) ||
        c.district.toLowerCase().includes(search)
    );
  }

  return NextResponse.json({ success: true, count: results.length, data: results });
}
