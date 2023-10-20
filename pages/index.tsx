// ./pages/index.tsx
import React from 'react';
import PricingPlans from '../components/PricingPlans';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <PricingPlans />
    </div>
  );
};

export default Home;