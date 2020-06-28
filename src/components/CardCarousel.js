import React from 'react';
import { StatusCard } from './StatusCard';
import { ClientCard } from './ClientCard';
import { ModeCard } from './ModeCard';
import { FavFiltersCard } from './FavFiltersCard';

export const CardCarousel = () => {
  return (
    <React.Fragment>
      <StatusCard />
      <ClientCard />
      <ModeCard />
      <FavFiltersCard />
    </React.Fragment>
  );
};

export default CardCarousel;
