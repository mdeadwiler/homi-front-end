import { useState } from 'react';

import { LandingMap } from '../components/LandingMap.jsx'
import { ListingCard } from '../components/ListingCard.jsx'

export const Landing = () => {
  const [user, setUser] = useState(null);
  
  return (
    <main>
      <h1 className="text-left p-4 text-2xl">Welcome to Homi</h1>
      <div className="flex flex-row w-full h-5/6">
        < LandingMap />
        <div className="m-4 bg-alternativeColor w-1/2 h-full rounded-lg">
          {/* < ListingCard /> */}
        </div>
      </div>
    </main>
  );
};
