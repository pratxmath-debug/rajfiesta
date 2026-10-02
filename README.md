# 🏰 RajFiesta — Where Rajasthan Comes Alive

> **An interactive Rajasthan heritage, tourism, and travel platform combining a digital heritage museum, interactive spatial atlas, and AI-powered trip planner.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## 🌟 Product Vision & Differentiators

RajFiesta turns Rajasthan's medieval history and vibrant culture into an interactive journey:
- 🗺️ **Interactive Geographic Atlas**: SVG map of Rajasthan with authentic geography (Thar Desert, Aravallis, Mewar, Marwar, Hadoti) and filtering by Forts, Palaces, Temples, Stepwells, Hidden Gems, Hotels, and Royal Cuisine.
- 🏛️ **10 Crown City Guides**: Comprehensive pages for Jaipur, Jodhpur, Udaipur, Jaisalmer, Bikaner, Pushkar, Ajmer, Mount Abu, Chittorgarh, and Bundi & Kota.
- 📖 **Interactive Historical Storytelling**: Chronological sagas (1459 AD Foundation to Modern Day), architectural breakdowns, oral legends, and voice-narrated audio chronicles with an ambient desert Tanpura harmonic drone synthesizer.
- 💎 **Hidden Rajasthan**: Dedicated offbeat vault showcasing forgotten stepwells (Chand Baori, Raniji Ki Baori), ghost hamlets (Kuldhara, Bhangarh), and secret desert temples.
- 🤖 **AI Trip Planner**: Generates personalized hour-by-hour itineraries based on starting city, days (2–14), budget, travel style, companions, and pace; calculates transit time, distance, hotels, food, and budget breakdowns.
- ✨ **RajBot AI Assistant**: Floating royal concierge assistant on every page answering queries about routes, entry fees, delicacies, and packing tips.
- 🚆 **Travel Booking Hub**: Intercity flights, express trains (including Vande Bharat & Palace on Wheels), Volvo sleeper buses, and chauffeur cabs.
- 🏨 **Hotels & Havelis Directory**: Heritage palaces, desert camps, and backpacker hostels with instant reservation vouchers.
- 🍛 **Royal Cuisine & Culture**: Authentic dishes with recipes, iconic eateries, folk dances (Ghoomar, Kalbelia), desert bards (Manganiyar), and artisan crafts.
- 📅 **Annual Festivals Calendar**: Confirmed schedules and visitor guides for Pushkar Fair, Desert Festival, Literature Festival, and Mewar Festival.
- 👤 **User Dashboard & Passport**: Saved places wishlist, active itineraries, and interactive Heritage Passport completion check-off.
- 🛡️ **Admin Studio**: Full CMS to manage destinations, hotels, and festivals.

---

## 🏗️ Architecture & Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom Royal Rajasthani design tokens:
  - Sandstone Beige (`#FDFBF7`, `#F7F2EA`)
  - Royal Blue (`#0F2C59`)
  - Royal Crimson Maroon (`#780016`)
  - Terracotta (`#C85A32`)
  - Desert Gold (`#D4AF37`, `#E5A93C`)
- **Iconography**: Lucide React
- **Web Audio & Speech**: Web Speech API (`SpeechSynthesis`) & HTML5 Web Audio API synthesizer for ambient Tanpura drones
- **State Management**: React Context (`AppContext`) with persistent `localStorage` synchronization
- **APIs**: Next.js Route Handlers (`/api/ai/planner`, `/api/ai/chat`, `/api/cities`, `/api/destinations`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/rajfiesta.git

# Navigate to project directory
cd rajfiesta

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the production application
npm run build

# Start the production server
npm run start
```

---

## ☁️ Deploying to Vercel

### Option 1: One-Click GitHub Import (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the `rajfiesta` repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy**.

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy directly from terminal
vercel
```

---

## 📜 License

Distributed under the MIT License. Crafted with devotion to Rajasthan's heritage. Padharo Mhare Desh! 🙏
