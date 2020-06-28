import StatusIcon from './StatusIcons';
import Grid from '@material-ui/core/Grid';
import { StatusBadge } from './StatusBadge';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { DataContext } from '../App';
import { getColumnAggData, getColumnData, getValueNormalized } from '../utils/dataTranslator';
import CardDisplay from './CardDisplay';

export const InfoCard = (props) => {
  const { color, columnName, useAbbv = false } = props;
  const { dispatch, state } = React.useContext(DataContext);
  const colNameNormalized = getValueNormalized(columnName);
  const aggDataObj = getColumnAggData(state, colNameNormalized);
  const aggDataObjKeys = Object.keys(aggDataObj).sort((a, b) => (a > b ? 1 : -1));

  const applyFilter = (columnName, value) => {
    const index = state.columnData.findIndex((column) => column.label === columnName);
    dispatch({
      type: state.filters[index].includes(value) ? 'FILTER_REMOVED' : 'FILTER_ADDED',
      payload: {
        index: index,
        value: value,
      },
    });
  };

  const updateColumns = () => getColumnData(state, dispatch);

  useEffect(() => {
    updateColumns();
  }, [state.filters]);

  return (
    <CardDisplay {...props}>
      <Grid container direction={'column'} spacing={2}>
        {aggDataObjKeys.length > 0 &&
          aggDataObjKeys.map((key, index) => {
            const backgroundColor = color[(index + 2) * 100] || color[500];
            const statusInfo = <StatusIcon status={useAbbv ? key.charAt(0) : key} />;
            return (
              <Grid
                item
                container
                direction={'row'}
                spacing={3}
                wrap={'nowrap'}
                justify="flex-start"
                alignItems="center"
                key={index.toString()}
                onClick={() => applyFilter(columnName, key)}
                style={{ cursor: 'pointer' }}
              >
                <Grid item>
                  <StatusBadge
                    backgroundColor={backgroundColor}
                    statusInfo={statusInfo}
                    badgeInfo={aggDataObj[key]}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" component="p">
                    {key}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
      </Grid>
    </CardDisplay>
  );
};

export default InfoCard;
