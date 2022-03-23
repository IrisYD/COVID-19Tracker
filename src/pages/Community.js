import './Community.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';


function Community() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [symptom, setSymptoms] = React.useState('Cough');

    const handleChange = (event) => {
        setSymptoms(event.target.value);
    };

    const symptoms = [
        {
          value: 'Cough',
        },
        {
          value: 'Fever',
        },
        {
          value: 'Shortness of Breath',
        },
        {
          value: 'Headache',
        },
      ];

      const [value, setValue] = React.useState(null);
      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  


    return <div className='community-container'>
        <ul className='cards'>
            <Card />
            <Card />
        </ul>
        <div className='symptoms'>
        <Button variant="outlined" onClick={handleClickOpen}>
            Share Your Symptoms
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Share Your Symptoms</DialogTitle>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <DialogContent>
            <DialogContentText>
            Share your symptoms in our community, connect with each other.
            </DialogContentText>
        
            <TextField
            id="outlined-select-currency"
            select
            // label="Select"
            value={symptoms}
            onChange={handleChange}
            helperText="Please select your symptom"
            variant="standard"
            >
          {symptoms.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Vaccine</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="pfizer" control={<Radio />} label="Pfizer" />
          <FormControlLabel value="moderna" control={<Radio />} label="Moderna" />
          <FormControlLabel value="jj" control={<Radio />} label="JohnsonJohnson" />
          <FormControlLabel value="other" control={<Radio />} label="other" />

        </RadioGroup>
        <FormLabel component="legend">Vaccine status</FormLabel>
        <RadioGroup
          column
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="fullyVaccined" control={<Radio />} label="Fully Vaccined" />
          {/* <FormHelperText>2 does for Pfizer and moderna, 1 for JohnsonJohnson</FormHelperText> */}
          <FormControlLabel value="1 does" control={<Radio />} label="Only 1 does" />
          {/* <FormHelperText>Don't choose it if you took JohnsonJohnson</FormHelperText> */}
          <FormControlLabel value="None" control={<Radio />} label="None" />
        </RadioGroup>

      <FormLabel component="legend">Share Your Recent Test Results</FormLabel>
        <RadioGroup
          column
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="positive" control={<Radio />} label="Positive" />
          {/* <FormHelperText>2 does for Pfizer and moderna, 1 for JohnsonJohnson</FormHelperText> */}
          <FormControlLabel value="negative" control={<Radio />} label="Negative" />
          {/* <FormHelperText>Don't choose it if you took JohnsonJohnson</FormHelperText> */}
          <FormControlLabel value="none" control={<Radio />} label="Not Applicable" />
        </RadioGroup>
        <TextField
          id="standard-textarea"
          label="Date to show symptoms"
          placeholder="MM/DD/YYYY"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Comments"
          placeholder="Leave your comments"
          multiline
          variant="standard"
        />
      </FormControl>
        </DialogContent>
        </Box>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Post</Button>
        </DialogActions>
        </Dialog>

        </div>
    </div>
}

function Card() {
    return <li>
    <div className='user'>
        <div className='avatar' style={{backgroundImage: 'url(../images/spiderman.png)'}} />
        <div className='user_name'>Wonder Women</div>
        <div>Age: 28</div>
        <div>No underlying disease</div>
    </div>
    <div className='info'>
        <div className='row'>
            <span>Fever</span>
            <span>Headache</span>
        </div>
        <div className='row'>
            <span>Test Positive</span>
            <span>Omicron</span>
        </div>
        <div className='row'>
            <span>Start time: 02/19/2022</span>
            <span>Last time: 36 hours</span>
        </div>
        <div className='row comments-row'>
            <p>
                I start to have lalalalalalalalalalalala .... <br/>
                lalalalal 
            </p>
            <div className='comments'>
                28
            </div>
        </div>
    </div>
</li>
}

export default Community