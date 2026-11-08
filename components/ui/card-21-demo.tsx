import * as React from "react";
import { DestinationCard } from "@/components/ui/card-21";

const DestinationCardDemo = () => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 bg-background">
      <div className="w-full max-w-[320px] h-[450px]">
        <DestinationCard
          imageUrl="https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=800&q=80"
          location="Gunung Rinjani"
          flag="🌋"
          stats="3.726 mdpl • UNESCO Global Geopark"
          href="#destinasi"
          themeColor="25 80% 25%"
        />
      </div>
      <div className="w-full max-w-[320px] h-[450px]">
        <DestinationCard
          imageUrl="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
          location="Mandalika & Merese"
          flag="🌊"
          stats="Pesisir Samudra • Sirkuit Mandalika"
          href="#destinasi"
          themeColor="205 70% 25%"
        />
      </div>
    </div>
  );
};

export default DestinationCardDemo;
