import { useState } from 'react';

import { LandingMap } from '../components/LandingMap.jsx'
import { ListingCard } from '../components/ListingCard.jsx'

export const Landing = () => {
  const [user, setUser] = useState(null);
  
  return (
    <main>
      < LandingMap />
      <div>
        {/* < ListingCard /> */}
      </div>
    </main>
  );
};
