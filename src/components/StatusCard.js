import { indigo } from '@material-ui/core/colors';
import React from 'react';
import { InfoCard } from './InfoCard';
import CompareArrowsTwoToneIcon from '@material-ui/icons/CompareArrowsTwoTone';

export const StatusCard = () => {
  return (
    <InfoCard
      color={indigo}
      columnName={'Status'}
      useAbbv={false}
      headerTitle={'Freight By Status'}
      avatarContent={<CompareArrowsTwoToneIcon />}
    />
  );
};

export default StatusCard;
