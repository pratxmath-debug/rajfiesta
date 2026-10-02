import { NextResponse } from "next/server";
import { DESTINATIONS, CITIES } from "@/data/rajasthanData";
import { RAJASTHANI_DISHES } from "@/data/cuisineCultureData";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const q = (message || "").toLowerCase();

    let reply = "";

    if (q.includes("jaipur")) {
      reply = `🏰 **Jaipur (The Pink City) Highlights**:\n• Amber Fort & Sheesh Mahal mirror palace\n• Hawa Mahal (Palace of Winds)\n• City Palace & Jantar Mantar\n• Pyaaz Kachori at Rawat Mishtan Bhandar\n• Sunset at Nahargarh Fort with views across the entire glowing city.`;
    } else if (q.includes("jodhpur")) {
      reply = `💙 **Jodhpur (The Blue City) Highlights**:\n• Mehrangarh Fort towering 410 feet above the cliff\n• Jaswant Thada marble cenotaphs\n• Toorji Ka Jhalra 18th-century stepwell\n• Saffron Makhaniya Lassi at Mishrilal Clock Tower\n• Blue City walking tour through Navchokiya alleys.`;
    } else if (q.includes("udaipur")) {
      reply = `🌊 **Udaipur (The City of Lakes) Highlights**:\n• Grand City Palace overlooking Lake Pichola\n• Sunset boat cruise to Jag Mandir\n• Romantic dinner at Ambrai Ghat with illuminated palace views\n• Royal Laal Maas at 1559 AD\n• Excursion to Kumbhalgarh Fort's 36km Great Wall of India.`;
    } else if (q.includes("jaisalmer")) {
      reply = `🐪 **Jaisalmer (The Golden City) Highlights**:\n• Sonar Qila—one of the world's last living forts\n• Sunset camel safari across Sam Sand Dunes\n• Intricately carved stone facades of Patwon Ki Haveli\n• Atmospheric ghost village of Kuldhara\n• Stargazing and folk music around desert campfires.`;
    } else if (q.includes("budget") || q.includes("cost") || q.includes("price")) {
      reply = `💰 **Rajasthan Budget Estimator**:\n• **Backpacker / Solo:** ₹1,200 – ₹2,000 / day (Hostels like Zostel, street food, state sleeper buses, shared autos).\n• **Comfort / Heritage:** ₹3,500 – ₹6,500 / day (Heritage Haveli stays, multi-course dining, AC trains / private cab).\n• **Royal Luxury:** ₹25,000+ / day (Grand Palace hotels like Taj Lake Palace & Rambagh, private chauffeur, vintage car arrivals).`;
    } else {
      reply = `🙏 **Khamma Ghani!** Rajasthan offers centuries of living history across its forts, palaces, and desert oases. You can ask me about specific cities (Jaipur, Jodhpur, Udaipur, Jaisalmer), local delicacies, travel timings, or ask me to draft a custom itinerary!`;
    }

    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json({ error: "Chat service error" }, { status: 500 });
  }
}
