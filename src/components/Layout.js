import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardCarousel from './CardCarousel';
import Typography from '@material-ui/core/Typography';
import { AddNewShipment } from './AddNewShipment';
import TrackChangesTwoToneIcon from '@material-ui/icons/TrackChangesTwoTone';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Grid container direction="row" justify="space-between" spacing={3}>
          <Grid item>
            <Typography variant="h4" style={{ color: '#fff' }} className="faux-logo">
              <TrackChangesTwoToneIcon
                style={{
                  display: 'inline-block',
                  fontSize: 32,
                  position: 'relative',
                  top: '4px',
                  marginRight: '4px',
                }}
              />
              Your Freight Tracker
            </Typography>
          </Grid>
          <Grid item>
            <AddNewShipment />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          direction={'row'}
          justify={'space-evenly'}
          alignItems={'center'}
          className={'hero'}
        >
          <CardCarousel />
        </Grid>
        {children}
      </Container>
    </React.Fragment>
  );
};

export default Layout;
