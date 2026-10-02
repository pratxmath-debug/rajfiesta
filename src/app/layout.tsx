import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { ToastContainer } from "@/components/ToastContainer";
import { SearchModal } from "@/components/SearchModal";
import { RajBot } from "@/components/RajBot";

export const metadata: Metadata = {
  title: "RajFiesta — Where Rajasthan Comes Alive | Heritage, Tourism & AI Trip Planner",
  description:
    "Discover Rajasthan's forts, royal palaces, vibrant cities, hidden gems, and cultural heritage through an interactive map, historical storytelling, and personalized AI trip planning.",
  keywords: [
    "Rajasthan Tourism",
    "Jaipur",
    "Udaipur",
    "Jodhpur",
    "Jaisalmer",
    "Mehrangarh Fort",
    "Amber Fort",
    "AI Trip Planner",
    "Rajasthan Heritage",
    "Desert Safari",
    "Palaces of Rajasthan"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-[#FDFBF7] text-[#2C221E] antialiased selection:bg-[#E5A93C]/30 selection:text-[#780016]">
        <AppProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileNav />
          <RajBot />
          <SearchModal />
          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}
