import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";

export const StatusBadge = ({ statusInfo, badgeInfo, backgroundColor }) => {
  return (
    <Badge
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      badgeContent={<Avatar className={"small-avatar"}>{badgeInfo}</Avatar>}
    >
      <Avatar style={{ backgroundColor: backgroundColor }}>{statusInfo}</Avatar>
    </Badge>
  );
};

export default StatusBadge;
