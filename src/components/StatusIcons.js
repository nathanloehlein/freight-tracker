import React from "react";
import DirectionsBoatTwoToneIcon from "@material-ui/icons/DirectionsBoatTwoTone";
import AirplanemodeActiveTwoToneIcon from "@material-ui/icons/AirplanemodeActiveTwoTone";
import TrainTwoToneIcon from "@material-ui/icons/TrainTwoTone";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import DoubleArrowTwoToneIcon from "@material-ui/icons/DoubleArrowTwoTone";
import WarningTwoToneIcon from "@material-ui/icons/WarningTwoTone";
import AutorenewTwoToneIcon from "@material-ui/icons/AutorenewTwoTone";

export const StatusIcon = ({ status }) => {
  if (status) {
    const statusNormalized =
      status.toString().toLowerCase().replace(/\s/g, "") || "";
    switch (statusNormalized) {
      case "arrived":
        return <CheckCircleTwoToneIcon />;
      case "cancelled":
        return <CancelTwoToneIcon />;
      case "customshold":
        return <SearchTwoToneIcon />;
      case "intransit":
        return <DoubleArrowTwoToneIcon />;
      case "roll-over":
        return <AutorenewTwoToneIcon />;
      case "transporterror":
        return <WarningTwoToneIcon />;
      case "rail":
        return <TrainTwoToneIcon />;
      case "sea":
        return <DirectionsBoatTwoToneIcon />;
      case "air":
        return <AirplanemodeActiveTwoToneIcon />;
      default:
        return <span>{statusNormalized}</span>;
    }
  }
  return null;
};

export default StatusIcon;
