import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import symptoms from "../data/symptoms.json"

export default function Health() {

  return (
      <Container
          style={{
            padding: 0,
          }}
          maxWidth={'xl'}
      >
        <Paper elevation={2} sx={{mb: 4, px: 4, py: 4}}>
          <List>
            <ListItem sx={{px: 0, py: 0}} divider={true}>
              <Box sx={{py: 1, px: 2, width: '100%'}}>
                <Grid container spacing={2} alignItems={'center'}>
                  <Grid
                      item
                      xs
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={{display: 'flex'}}
                  >
                    <ListItemText
                        primary={
                            <Typography variant={'h2'} gutterBottom>
                              COVID-19: Identifying the Symptoms
                            </Typography>
                        }
                        primaryTypographyProps={{
                          fontWeight: 'bold',
                        }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </ListItem>
            <ListItem sx={{px: 0, py: 0}} divider={true}>
              <Box sx={{py: 1, px: 2, width: '100%'}}>
                <Grid container spacing={2} alignItems={'center'}>
                  <Grid
                      item
                      xs
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={{display: 'flex'}}
                  >
                    <ListItemText
                        primary={'Symptoms'}
                        primaryTypographyProps={{
                          fontWeight: 'bold',
                        }}
                    />
                  </Grid>
                  <Grid
                      item
                      xs={2}
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={{display: 'flex'}}
                  >
                    <ListItemText
                        primary={'COVID-19'}
                        primaryTypographyProps={{
                          fontWeight: 'bold',
                        }}
                    />
                  </Grid>
                  <Grid
                      item
                      xs={2}
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={{display: 'flex'}}
                  >
                    <ListItemText
                        primary={'Cold'}
                        primaryTypographyProps={{
                          fontWeight: 'bold',
                        }}
                    />
                  </Grid>
                  <Grid
                      item
                      xs={2}
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={{display: 'flex'}}
                  >
                    <ListItemText
                        primary={'Flu'}
                        primaryTypographyProps={{
                          fontWeight: 'bold',
                        }}
                    />
                  </Grid>
                  <Grid
                      item
                      xs={2}
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={{display: 'flex'}}
                  >
                    <ListItemText
                        primary={'Allergies'}
                        primaryTypographyProps={{
                          fontWeight: 'bold',
                        }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </ListItem>
            {
              symptoms.map((symptom) => (
                  <ListItem sx={{px: 0, py: 0}} divider={true}>
                    <Box sx={{py: 1, px: 2, width: '100%'}}>
                      <Grid container spacing={2} alignItems={'center'}>
                        <Grid
                            item
                            xs
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{display: 'flex'}}
                        >
                          <ListItemText
                              primary={'Symptoms'}
                              primaryTypographyProps={{
                                // fontWeight: 'bold',
                              }}
                          />
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{display: 'flex'}}
                        >
                          <ListItemText
                              primary={symptom['covid-19']}
                              primaryTypographyProps={{
                                fontWeight: 'bold',
                              }}
                          />
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{display: 'flex'}}
                        >
                          <ListItemText
                              primary={symptom['cold']}
                              primaryTypographyProps={{
                                fontWeight: 'bold',
                              }}
                          />
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{display: 'flex'}}
                        >
                          <ListItemText
                              primary={symptom['cold']}
                              primaryTypographyProps={{
                                fontWeight: 'bold',
                              }}
                          />
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{display: 'flex'}}
                        >
                          <ListItemText
                              primary={symptom['allergies']}
                              primaryTypographyProps={{
                                fontWeight: 'bold',
                              }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </ListItem>
              ))
            }
          </List>
        </Paper>
        {/*<Grid container>*/}
        {/*  <Grid item xs={12}>*/}

        {/*  </Grid>*/}
        {/*</Grid>*/}
      </Container>);
}