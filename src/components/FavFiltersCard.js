import StatusIcon from './StatusIcons';
import { deepOrange } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { StatusBadge } from './StatusBadge';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { DataContext } from '../App';
import CardDisplay from './CardDisplay';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import Button from '@material-ui/core/Button';
import { saveCurrentFilterData, getFavFilters, deleteFavFilter } from '../utils/filterUtils';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import ellipsis from 'text-ellipsis';

export const FavFiltersCard = () => {
  const { dispatch, state } = React.useContext(DataContext);

  const favFilterSelect = (list) => {
    dispatch({
      type: 'FILTERS_REPLACED',
      payload: list,
    });
  };

  const favFilters = getFavFilters();

  return (
    <CardDisplay
      headerTitle={'Favorite Filters'}
      avatarContent={<FavoriteTwoToneIcon />}
      actionButtons={
        <Button
          color={'primary'}
          onClick={() => saveCurrentFilterData(state.filters, dispatch)}
          variant="contained"
        >
          {'Save Current Filters'}
        </Button>
      }
    >
      <Grid container direction={'column'} spacing={1}>
        {favFilters.length > 0 ? (
          favFilters.map((filter, index) => {
            const backgroundColor = deepOrange[(index + 2) * 100] || deepOrange[500];
            const statusInfo = <StatusIcon status={filter.name.toString().charAt(0)} />;
            return (
              <Grid
                item
                container
                direction={'row'}
                spacing={2}
                justify="flex-start"
                wrap={'nowrap'}
                alignItems="center"
                key={index.toString()}
                onClick={() => favFilterSelect(filter.list)}
                style={{ cursor: 'pointer' }}
                title={filter.name}
                className="hoverHighlight"
              >
                <Grid item>
                  <StatusBadge
                    backgroundColor={backgroundColor}
                    statusInfo={statusInfo}
                    badgeInfo={filter.list.flat(Infinity).length}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" component="p">
                    {ellipsis(filter.name, 15) || index + 1}
                  </Typography>
                </Grid>
                <Grid
                  style={{ marginLeft: 'auto' }}
                  item
                  onClick={(e) => {
                    deleteFavFilter(filter, index, dispatch);
                    e.stopPropagation();
                  }}
                >
                  <DeleteForeverTwoToneIcon />
                </Grid>
              </Grid>
            );
          })
        ) : (
          <Typography>{'You have no filters. Filter data and then save to get started'}</Typography>
        )}
      </Grid>
    </CardDisplay>
  );
};

export default FavFiltersCard;
