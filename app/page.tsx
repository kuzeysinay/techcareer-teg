import { CareerGuide } from "./components/CareerGuide";
import { EnergySelector } from "./components/EnergySelector";
import { Hero } from "./components/Hero";
import { SectorSelector } from "./components/SectorSelector";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <CareerGuide />
        <SectorSelector />
        <EnergySelector />
      </main>
    </div>
  );
}
