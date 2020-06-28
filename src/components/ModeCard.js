import { red } from '@material-ui/core/colors';
import React from 'react';
import { InfoCard } from './InfoCard';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';

export const ModeCard = () => {
  return (
    <InfoCard
      color={red}
      columnName={'Mode'}
      useAbbv={false}
      headerTitle={'Freight By Mode'}
      avatarContent={<LocalShippingTwoToneIcon />}
    />
  );
};

export default ModeCard;
