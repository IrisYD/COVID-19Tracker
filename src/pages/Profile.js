import React, { useEffect, useState } from 'react';
import axios from 'axios'

import {
  Alert,
  Box,
  Button, Collapse,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid, IconButton,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../context';
import { Navigate, useNavigate } from 'react-router-dom';

import '../App.css';
import profileServices from '../services/profileServices';

const url = "http://localhost:3001";

function ProfileRender({ usernameLoggedIn, setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState(0);
  const [vaccinationStatus, setVaccinationStatus] = useState('');
  const [vaccineBrand, setVaccineBrand] = useState('');
  const [userProfile, setUserProfile] = useState({
                                                   name: '',
                                                   location: '',
                                                   age: 0,
                                                   vaccineStatus: '',
                                                   vaccineBrand: '',
                                                 });
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMsg, setAlertMsg] = useState('Profile updated successfully!');

  const navigate = useNavigate();

  useEffect(() => {
    profileServices.getCurrentUserProfile()
        .then(user => {
          // console.log(user);
          setUsername(user.name);
          setLocation(user.location);
          setAge(user.age);
          setVaccinationStatus(user.vaccineStatus);
          setVaccineBrand(user.vaccineBrand);
          setUserProfile({
                           name: user.name,
                           location: user.location,
                           age: user.age,
                           vaccineStatus: user.vaccineStatus,
                           vaccineBrand: user.vaccineBrand,
                         });
        });
  }, []);

  // if (usernameLoggedIn == 'null') {
  //   return <Navigate to={'/login'} replace/>;
  // }

  console.log('Entering profile for username:', usernameLoggedIn);

  const handleSubmit = () => {
    let newProfile = {};
    if (username !== userProfile.name) {
      newProfile.name = username;
    }
    if (location !== userProfile.location) {
      newProfile.location = location;
    }
    if (age !== userProfile.age) {
      newProfile.age = age;
    }
    if (vaccinationStatus !== userProfile.vaccineStatus) {
      newProfile.vaccineStatus = vaccinationStatus;
    }
    if (vaccineBrand !== userProfile.vaccineBrand) {
      newProfile.vaccineBrand = vaccineBrand;
    }
    console.log('New profile:', newProfile);

    profileServices.updateCurrentUserProfile(newProfile).then(updatedProfile => {
      if (!updatedProfile.msg) {
        setAlertMsg('Profile updated successfully!');
        setAlertSeverity('success');
        setOpen(true);
        console.log('Updated profile:', updatedProfile);
        if (updatedProfile.name) {
          sessionStorage.setItem('username', updatedProfile.name);
          setCurrentUser(updatedProfile.name);
        }
      } else {
        setAlertMsg(updatedProfile.msg);
        setAlertSeverity('error');
        setOpen(true);
      }
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
    }

    return axios.get(
        url + '/logout',
        config
    )
    .then((res) => {
        alert(res.data);
        console.log(res.data);
        sessionStorage.clear();
        window.location.replace("http://localhost:3000");
    })
    .catch((error) => {
        alert("Did not logged in");
        console.log(error);
    })
  }

  return (
      <Container
          style={{
            padding: 0,
          }}
          maxWidth={'md'}
      >
        <Box sx={{ width: '100%' }}>
          <Collapse in={open}>
            <Alert
                severity={alertSeverity}
                action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                // sx={{ mb: 2 }}
            >
              {alertMsg}
            </Alert>
          </Collapse>
        </Box>
        <Paper elevation={2} sx={{ mb: 4, px: 4, py: 4 }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom marginBottom={3}>
            Edit your profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  autoComplete={'username'}
                  variant="standard"
                  value={username}
                  onChange={event => setUsername(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  id="location"
                  name="location"
                  label="Your location"
                  fullWidth
                  variant="standard"
                  value={location}
                  onChange={event => setLocation(event.target.value)}
              />
            </Grid>
            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <TextField*/}
            {/*      required*/}
            {/*      id="password"*/}
            {/*      name="password"*/}
            {/*      label="Enter a new password"*/}
            {/*      type={'password'}*/}
            {/*      fullWidth*/}
            {/*      autoComplete={'new-password'}*/}
            {/*      variant="standard"*/}
            {/*  />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12} sm={6}>*/}
            {/*  <TextField*/}
            {/*      required*/}
            {/*      id="password"*/}
            {/*      name="password"*/}
            {/*      label="Confirm your new password"*/}
            {/*      type={'password'}*/}
            {/*      fullWidth*/}
            {/*      autoComplete={'new-password'}*/}
            {/*      variant="standard"*/}
            {/*  />*/}
            {/*</Grid>*/}
            <Grid item xs={12}>
              <TextField
                  id="age"
                  name="age"
                  label="Age"
                  fullWidth
                  variant="standard"
                  value={age}
                  onChange={event => setAge(parseInt(event.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Vaccination status</FormLabel>
                <RadioGroup
                    row
                    name="row-radio-buttons-group"
                    value={vaccinationStatus}
                    onChange={event => setVaccinationStatus(event.target.value)}
                >
                  <FormControlLabel value="Not vaccinated" control={<Radio/>} label="Not vaccinated"/>
                  <FormControlLabel value="First dose taken" control={<Radio/>} label="First dose taken"/>
                  <FormControlLabel value="Fully vaccinated" control={<Radio/>} label="Fully vaccinated"/>
                  <FormControlLabel value="Booster taken" control={<Radio/>} label="Booster taken"/>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Vaccine brand</FormLabel>
                <RadioGroup
                    row
                    name="row-radio-buttons-group"
                    value={vaccineBrand}
                    onChange={event => setVaccineBrand(event.target.value)}
                >
                  <FormControlLabel value="Pfizer" control={<Radio/>} label="Pfizer"/>
                  <FormControlLabel value="Moderna" control={<Radio/>} label="Moderna"/>
                  <FormControlLabel value="Johnson & Johnson" control={<Radio/>} label="Johnson & Johnson"/>
                  <FormControlLabel value="Other" control={<Radio/>} label="Other"/>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
                sx={{ mt: 3, ml: 1 }}
                onClick={() => navigate('/')}
            >
              Go to Data Page
            </Button>
            <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
                sx={{ mt: 3, ml: 1 }}
                onClick={(evt) => {
                  handleClick(evt)
                  .then(() => { setUsername(null) })
                }}
            >
              Logout
            </Button>
          </Box>
        </Paper>
      </Container>
  );
}

export default function Profile() {

  return (
      <AppContext.Consumer>
        {({ username, setUsername }) => {
          return (
              username ? <ProfileRender usernameLoggedIn={username} setCurrentUser={setUsername} />
                       : <Navigate to={'/login'} replace/>
              // <ProfileRender usernameLoggedIn={sessionStorage.getItem('username')} setCurrentUser={setUsername}/>
          );
        }}
      </AppContext.Consumer>
  );
};