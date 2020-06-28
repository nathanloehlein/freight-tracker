import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardCarousel from './CardCarousel';

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false}>
        <Grid
          container
          spacing={6}
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
