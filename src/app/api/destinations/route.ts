import { NextResponse } from "next/server";
import { DESTINATIONS } from "@/data/rajasthanData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city")?.toLowerCase();
  const category = searchParams.get("category")?.toLowerCase();
  const hiddenGemsOnly = searchParams.get("hiddenGems") === "true";

  let results = DESTINATIONS;

  if (city) {
    results = results.filter((d) => d.cityId === city);
  }

  if (category && category !== "all") {
    results = results.filter((d) => d.category === category);
  }

  if (hiddenGemsOnly) {
    results = results.filter((d) => d.isHiddenGem);
  }

  return NextResponse.json({ success: true, count: results.length, data: results });
}
