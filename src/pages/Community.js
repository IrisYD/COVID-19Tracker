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
import users from '../data/users.json'

function getUsers() {
  return [...users, ...getUsersFromLocalStorage()];
}

function getUsersFromLocalStorage() {
  const localUsers = JSON.parse(localStorage.getItem('users'));
  return localUsers?localUsers:[];
}

function setUsersToLocalStorage(users) {
  localStorage.setItem('users', JSON.stringify(users))
}

function Community() {
  const [open, setOpen] = React.useState(false);
  const [users, setUsers] = React.useState(getUsers());
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPost = (newUser) => {
    const user = {...{
      name: `Wonder Women ${new Date().getTime().toString().substr(9)}`,
      age: 28,
    },...newUser}
    const userList = [...users, ...[user]];
    setUsers(userList);
    setUsersToLocalStorage(userList.slice(1));
    setOpen(false);
  };

  const [value, setValue] = React.useState(null);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return <div className='community-container'>
    <ul className='cards'>
      {
        users.map(it => <Card user={it} key={it.name} />)
      }
    </ul>
    <div className='symptoms'>
      <Button variant="outlined" onClick={handleClickOpen}>
        Share Your Symptoms
      </Button>

      {open && <SymptomDialog onClose={handleClose} onSubmit={addPost} />}
    </div>
  </div>
}

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

function SymptomDialog(props) {
  const { onClose, onSubmit } = props;

  const [symptom, setSymptom] = React.useState("");
  const [vaccine, setVaccine] = React.useState(null);
  const [testResult, setTestResult] = React.useState(null);
  const [startTime, setStartTime] = React.useState("");
  const [comments, setComments] = React.useState("");

  const onPost = () => {
    onSubmit({
      symptom,
      vaccine,
      testResult,
      startTime,
      comments
    })
  }

  return <Dialog open onClose={onClose}>
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
          value={symptom}
          onChange={(event, v) => {
            setSymptom(event.target.value)
          }}
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
            onChange={(_, value) => {
              setVaccine(value)
            }}
          >
            <FormControlLabel value="pfizer" control={<Radio />} label="Pfizer" />
            <FormControlLabel value="moderna" control={<Radio />} label="Moderna" />
            <FormControlLabel value="jj" control={<Radio />} label="JohnsonJohnson" />
            <FormControlLabel value="other" control={<Radio />} label="other" />
          </RadioGroup>
          <FormLabel component="legend">Vaccine status</FormLabel>
          <RadioGroup
            column="true"
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
            column="true"
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(_, value) => {
              setTestResult(value)
            }}
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
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value)
            }}
          />
          <TextField
            id="standard-textarea"
            label="Comments"
            placeholder="Leave your comments"
            multiline
            variant="standard"
            value={comments}
            onChange={(e) => {
              setComments(e.target.value)
            }}
          />
        </FormControl>
      </DialogContent>
    </Box>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onPost}>Post</Button>
    </DialogActions>
  </Dialog>
}

function Card(props) {
  const { user } = props;

  return <li>
    <div className='user'>
      <div className='avatar' style={{ backgroundImage: `url(${user.avatar?user.avatar:'../images/spiderman.png'})` }} />
      <div className='user_name'><b>{user.name}</b></div>
      <div>Age: {user.age}</div>
      <div>No underlying disease</div>
    </div>
    <div className='info'>
      <div className='row'>
      <b>{user.symptom}</b>
      </div>
      <div className='row'>
        <span>Test Result:   <b>{user.testResult}</b></span>
      </div>
      <div className='row'>
        <span>Start To Show Symptoms:   <b>{user.startTime}</b></span>
      </div>
      <div className='row comments-row'>
        <p>
          {user.comments}
        </p>
        <div className='comments'>
          {user.age}
        </div>
      </div>
    </div>
  </li>
}

export default Community