// ./components/PricingPlans.tsx
import React from 'react';
import PricingCard from './PricingCard';

const plans = [
  {
    title: 'Basic',
    price: '$10/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  {
    title: 'Premium',
    price: '$20/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  },
  {
    title: 'Pro',
    price: '$30/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']
  }
];

const PricingPlans: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingPlans;