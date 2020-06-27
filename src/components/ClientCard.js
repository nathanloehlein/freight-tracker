import { green } from "@material-ui/core/colors";
import React from "react";
import { InfoCard } from "./InfoCard";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";

export const ClientCard = () => {
  return (
    <InfoCard
      color={green}
      columnName={"Client Name"}
      useAbbv={true}
      headerTitle={"Freight By Client"}
      avatarContent={<PeopleAltTwoToneIcon />}
    />
  );
};

export default ClientCard;
