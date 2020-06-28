import PostAddTwoToneIcon from '@material-ui/icons/PostAddTwoTone';
import Button from '@material-ui/core/Button';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import { DataContext } from '../App';
import { getPossibleValues, getValueNormalized } from '../utils/dataTranslator';

export const AddNewShipment = () => {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState({});
  const { state, dispatch } = React.useContext(DataContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAdd = (e) => {
    //quick and dirty form validation, would provide more useful feedback in real code
    const keys = Object.keys(formValues);
    if (keys.length < 8 || keys.some((key) => formValues[key] === '')) {
      alert('please fill in all fields');
      return false;
    } else {
      const normalizedObj = {};
      keys.forEach((key) => {
        const newKey = getValueNormalized(key);
        normalizedObj[newKey] = formValues[key];
      });
      dispatch({
        type: 'ROW_ADDED',
        payload: normalizedObj,
      });
      setFormValues({});
      setOpen(false);
    }
    e.preventDefault();
    return false;
  };

  const handleChange = (props) => {
    const name = props.target.name;
    const value = props.target.value;
    name && value && setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <Grid container direction={'row-reverse'} spacing={6}>
        <Grid item>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PostAddTwoToneIcon />}
          >
            Add New Shipment
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <form onSubmit={handleAdd}>
          <DialogTitle id="form-dialog-title">Add New Shipment</DialogTitle>
          <DialogContent>
            <DialogContentText>Add a new shipment using the form below</DialogContentText>
            <TextField
              autoFocus
              id="id"
              name="Shipment ID"
              label="Shipment ID"
              type="text"
              value={formValues.id}
              onChange={handleChange}
              fullWidth
              required
              margin={'normal'}
            />
            <TextField
              id="client"
              name="Client Name"
              label="Client Name"
              select
              onChange={handleChange}
              fullWidth
              required
              margin={'normal'}
            >
              {getPossibleValues(state, 'Client Name').map((option, index) => (
                <MenuItem key={option + index.toString()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="origin"
              label="Origin"
              name="Origin"
              select
              onChange={handleChange}
              fullWidth
              required
              margin={'normal'}
            >
              {getPossibleValues(state, 'Origin').map((option, index) => (
                <MenuItem key={option + index.toString()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="destination"
              label="Destination"
              name="Destination"
              select
              onChange={handleChange}
              fullWidth
              required
              margin={'normal'}
            >
              {getPossibleValues(state, 'Destination').map((option, index) => (
                <MenuItem key={option + index.toString()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="mode"
              label="Mode"
              name="Mode"
              select
              onChange={handleChange}
              fullWidth
              required
              margin={'normal'}
            >
              {getPossibleValues(state, 'Mode').map((option, index) => (
                <MenuItem key={option + index.toString()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="departure"
              label="Estimated Departure"
              name="Estimated Departure"
              type="date"
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin={'normal'}
            />

            <TextField
              id="arrival"
              label="Estimated Arrival"
              name="Estimated Arrival"
              type="date"
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              margin={'normal'}
            />

            <TextField
              id="status"
              label="Status"
              name="Status"
              select
              onChange={handleChange}
              fullWidth
              required
              margin={'normal'}
            >
              {getPossibleValues(state, 'Status').map((option, index) => (
                <MenuItem key={option + index.toString()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary" variant={'contained'}>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddNewShipment;
