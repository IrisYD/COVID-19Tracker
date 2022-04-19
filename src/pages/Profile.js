import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { AppContext } from '../context';
import { Navigate, useNavigate } from 'react-router-dom';

import '../App.css';
import profileServices from '../services/profileServices';

function ProfileRender({ usernameLoggedIn, setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState(0);
  const [vaccinationStatus, setVaccinationStatus] = useState('');
  const [userProfile, setUserProfile] = useState({
                                                   name: '',
                                                   location: '',
                                                   age: 0,
                                                   vaccineStatus: '',
                                                 });

  const navigate = useNavigate();

  useEffect(() => {
    profileServices.getCurrentUserProfile()
        .then(user => {
          // console.log(user);
          setUsername(user.name);
          setLocation(user.location);
          setAge(user.age);
          setVaccinationStatus(user.vaccineStatus);
          setUserProfile({
                           name: user.name,
                           location: user.location,
                           age: user.age,
                           vaccineStatus: user.vaccineStatus,
                         });
        });
  }, []);

  if (!usernameLoggedIn) {
    return <Navigate to={'/login'} replace/>;
  }

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
    console.log('New profile:', newProfile);

    profileServices.updateCurrentUserProfile(newProfile).then(updatedProfile => {
      console.log('Updated profile:', updatedProfile);
      if (updatedProfile.name) {
        localStorage.setItem('username', updatedProfile.name);
        setCurrentUser(updatedProfile.name);
      }
    });
  };

  return (
      <Container
          style={{
            padding: 0,
          }}
          maxWidth={'md'}
      >
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
                  <FormControlLabel value="NOT_VACCINATED" control={<Radio/>} label="Not vaccinated"/>
                  <FormControlLabel value="FIRST_DOSE" control={<Radio/>} label="First dose taken"/>
                  <FormControlLabel value="FULLY_VACCINATED" control={<Radio/>} label="Fully vaccinated"/>
                  <FormControlLabel value="BOOSTER_TAKEN" control={<Radio/>} label="Booster taken"/>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
                sx={{ mt: 3, ml: 1 }}
                onClick={() => navigate('/')}
            >
              Cancel
            </Button>
            <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                onClick={handleSubmit}
            >
              Submit
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
              // username ? <ProfileRender/> : <Navigate to={'/login'} replace/>
              <ProfileRender usernameLoggedIn={localStorage.getItem('username')} setCurrentUser={setUsername}/>
          );
        }}
      </AppContext.Consumer>
  );
};