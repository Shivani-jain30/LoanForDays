"use client";

import AnimatedCard from "./Cards";
import { CardsArray } from "./CardsArray";

export default function CardsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 ">
      {CardsArray.map((card) => (
        <div key={card.key} className="flex justify-center">
          <AnimatedCard
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        </div>
      ))}
    </div>
  );
}
