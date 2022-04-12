import React from 'react';

import {
  Box, Button,
  Checkbox,
  Container,
  CssBaseline, FormControl,
  FormControlLabel, FormLabel,
  Grid,
  Paper, Radio, RadioGroup,
  TextField,
  Typography
} from '@mui/material';

import '../App.css';


export default function Profile() {

  return (
      <Container
          style={{
            padding: 0,
          }}
          maxWidth={'lg'}
      >
        {/*<CssBaseline />*/}
        <Paper elevation={2} sx={{mb: 4, px: 4, py: 4}}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Edit your profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  autoComplete={'off'}
                  variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type={'password'}
                  fullWidth
                  autoComplete={'off'}
                  variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  // className={'profile__textfield'}
                  // required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  variant="standard"
                  style={{textAlign: 'left'}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  // required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                  id="bday-day"
                  name="bday-day"
                  label="Day"
                  fullWidth
                  variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                  id="bday-month"
                  name="bday-month"
                  label="Month"
                  fullWidth
                  variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                  id="bday-year"
                  name="bday-year"
                  label="Year"
                  fullWidth
                  variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel>Vaccination status</FormLabel>
                <RadioGroup
                    row
                    name="row-radio-buttons-group"
                >
                  <FormControlLabel value="first_dose" control={<Radio />} label="First dose taken" />
                  <FormControlLabel value="fully_vaccinated" control={<Radio />} label="Fully vaccinated" />
                  <FormControlLabel value="booster" control={<Radio />} label="Booster taken" />
                  <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/*<Grid item xs={12}>*/}
            {/*  <TextField*/}
            {/*      // required*/}
            {/*      id="address1"*/}
            {/*      name="address1"*/}
            {/*      label="Address line 1"*/}
            {/*      fullWidth*/}
            {/*      autoComplete="shipping address-line1"*/}
            {/*      variant="standard"*/}
            {/*  />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={12}>*/}
            {/*  <TextField*/}
            {/*      id="address2"*/}
            {/*      name="address2"*/}
            {/*      label="Address line 2"*/}
            {/*      fullWidth*/}
            {/*      autoComplete="shipping address-line2"*/}
            {/*      variant="standard"*/}
            {/*  />*/}
            {/*</Grid>*/}
            <Grid item xs={12} sm={6}>
              <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  variant="standard"
              />
            </Grid>
            {/*<Grid item xs={12}>*/}
            {/*  <FormControlLabel*/}
            {/*      control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}*/}
            {/*      label="Use this address for payment details"*/}
            {/*  />*/}
            {/*</Grid>*/}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ mt: 3, ml: 1 }}>
              Cancel
            </Button>
            <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
  );
};