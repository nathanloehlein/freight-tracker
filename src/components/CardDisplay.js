import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';

export const CardDisplay = ({ children, headerTitle, avatarContent, actionButtons = null }) => {
  return (
    <Grid item xs>
      <Card className={'hero-card'}>
        {headerTitle && (
          <CardHeader
            avatar={avatarContent && <Avatar>{avatarContent}</Avatar>}
            title={headerTitle}
            titleTypographyProps={{ variant: 'h6' }}
          />
        )}
        <CardContent>{children}</CardContent>
        {actionButtons && <CardActions>{actionButtons}</CardActions>}
      </Card>
    </Grid>
  );
};

export default CardDisplay;
