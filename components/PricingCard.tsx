// ./components/PricingCard.tsx
import React from 'react';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src="https://source.unsplash.com/random" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{plan.title}</div>
        <p className="text-gray-700 text-base">{plan.price}</p>
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;