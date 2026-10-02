import { NextResponse } from "next/server";
import { CITIES, DESTINATIONS } from "@/data/rajasthanData";
import { HOTELS } from "@/data/travelHotelsData";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      startCity = "New Delhi",
      days = 5,
      budget = 25000,
      travelStyle = "Heritage",
      companions = "Couple",
      pace = "Balanced"
    } = body;

    // Determine visited sequence of cities based on duration and start point
    const citySequence =
      days <= 3
        ? ["jaipur", "pushkar"]
        : days <= 5
        ? ["jaipur", "jodhpur", "udaipur"]
        : days <= 7
        ? ["jaipur", "bikaner", "jaisalmer", "jodhpur"]
        : ["jaipur", "pushkar", "jodhpur", "jaisalmer", "udaipur", "chittorgarh"];

    const itineraryDays = [];
    const totalKm = days * 140;

    for (let d = 1; d <= days; d++) {
      const citySlug = citySequence[(d - 1) % citySequence.length];
      const cityData = CITIES.find((c) => c.slug === citySlug) || CITIES[0];
      const cityMonuments = DESTINATIONS.filter((dest) => dest.cityId === cityData.id);

      const morningSpot = cityMonuments[0] || DESTINATIONS[0];
      const afternoonSpot = cityMonuments[1] || DESTINATIONS[1];
      const eveningSpot = cityMonuments[2] || DESTINATIONS[2];

      const dayPlan = {
        day: d,
        city: cityData.name,
        date: `Day ${d}`,
        routeLeg: d > 1 ? `${citySequence[(d - 2) % citySequence.length]} → ${cityData.name}` : `Arrival in ${cityData.name}`,
        transitHours: d > 1 ? (d % 2 === 0 ? "3.5 hrs (Express Train/Highway)" : "2.0 hrs (Scenic Pass)") : "Arrival",
        hotelRecommendation: HOTELS.find((h) => h.cityId === cityData.id)?.name || "Heritage Haveli Stay",
        activities: [
          {
            time: "08:30 AM",
            title: `Explore ${morningSpot.name}`,
            category: morningSpot.category,
            cost: morningSpot.entryFee.indian,
            notes: "Early morning to avoid afternoon desert heat and capture golden sunlight."
          },
          {
            time: "01:00 PM",
            title: `Traditional Lunch (${cityData.localFood[0]?.name || "Rajasthani Thali"})`,
            category: "food",
            cost: Math.round(budget / (days * 4)),
            notes: `Recommended spot: ${cityData.localFood[0]?.bestPlace || "Local Heritage Haveli"}`
          },
          {
            time: "03:30 PM",
            title: `Visit ${afternoonSpot.name}`,
            category: afternoonSpot.category,
            cost: afternoonSpot.entryFee.indian,
            notes: afternoonSpot.description.slice(0, 100) + "..."
          },
          {
            time: "06:30 PM",
            title: `Sunset views at ${eveningSpot.name} & local bazaar walk`,
            category: "sightseeing",
            cost: 0,
            notes: "Witness the illuminated ramparts and shop for authentic handicrafts."
          }
        ]
      };

      itineraryDays.push(dayPlan);
    }

    // Budget Breakdown
    const accommodationEstimate = Math.round(budget * 0.42);
    const transportEstimate = Math.round(budget * 0.28);
    const foodEstimate = Math.round(budget * 0.18);
    const ticketsEstimate = Math.round(budget * 0.07);
    const emergencyBuffer = budget - (accommodationEstimate + transportEstimate + foodEstimate + ticketsEstimate);

    return NextResponse.json({
      success: true,
      plan: {
        title: `${days}-Day Royal ${travelStyle} Circuit`,
        startCity,
        days,
        travelStyle,
        companions,
        pace,
        totalDistanceKm: totalKm,
        totalEstimatedBudget: budget,
        budgetBreakdown: {
          accommodation: accommodationEstimate,
          transportation: transportEstimate,
          foodDining: foodEstimate,
          monumentTickets: ticketsEstimate,
          contingencyBuffer: emergencyBuffer
        },
        culturalTips: [
          "Dress respectfully when entering temples (shoulders and knees covered).",
          "Remove footwear before stepping onto temple marble sanctums.",
          "Carry a lightweight cotton stole/scarf for desert dust and direct sun.",
          "Bargain politely in traditional bazaars; start around 60-70% of quoted price."
        ],
        itinerary: itineraryDays
      }
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to generate itinerary" }, { status: 500 });
  }
}
