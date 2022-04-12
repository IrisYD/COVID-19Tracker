import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper
} from "@mui/material";
import { styled } from '@mui/material/styles';
import symptoms from "../data/symptoms.json";

const ListItemTextCenter = styled(ListItem)(({theme}) => ({
  textAlign: 'center',
  padding: '0 0',
}));

export default function Health() {

  return (
      <Container
          style={{
            padding: 0,
          }}
          maxWidth={'xl'}
      >
        <Paper elevation={2} sx={{mb: 4, px: 4, py: 4, textAlign: 'center'}}>
          <List>
            <ListItemTextCenter
                divider={true}
            >
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
                          'COVID-19: Identifying the Symptoms'
                        }
                        primaryTypographyProps={{
                          variant: 'h2',
                          gutterBottom: true,
                          fontWeight: 'bold',
                        }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </ListItemTextCenter>
            <ListItemTextCenter
                divider={true}
            >
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
                          variant: 'h6',
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
                          variant: 'h6',
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
                          variant: 'h6',
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
                          variant: 'h6',
                        }}
                    />
                  </Grid>
                  <Grid
                      item
                      xs={2.5}
                      alignItems={'center'}
                      justifyContent={'center'}
                      sx={{display: 'flex'}}
                  >
                    <ListItemText
                        primary={'Allergies'}
                        primaryTypographyProps={{
                          fontWeight: 'bold',
                          variant: 'h6',
                        }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </ListItemTextCenter>
            {
              symptoms.map((symptom) => (
                  <ListItemTextCenter key={symptom.symptom.description} sx={{px: 0, py: 0}} divider={true}>
                    <Box sx={{py: 1, px: 2, width: '100%'}}>
                      <Grid container spacing={2} alignItems={'center'}>
                        <Grid
                            item
                            xs
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{display: 'flex'}}
                        >

                          <Card
                              variant={'outlined'}
                              sx={{width: 185}}
                          >
                            <CardMedia
                                component="img"
                                image={symptom.symptom.icon}
                                alt="Symptom Image"
                            />
                          </Card>
                          <ListItemText
                              primary={symptom.symptom.description}
                              primaryTypographyProps={{
                                ml: 2,
                                fontWeight: 'bold',
                                // fontSize: 18,
                                textAlign: 'left',
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
                              primaryTypographyProps={{}}
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
                              primaryTypographyProps={{}}
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
                              primaryTypographyProps={{}}
                          />
                        </Grid>
                        <Grid
                            item
                            xs={2.5}
                            alignItems={'center'}
                            justifyContent={'center'}
                            sx={{display: 'flex'}}
                        >
                          <ListItemText
                              primary={symptom['allergies']}
                              primaryTypographyProps={{}}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </ListItemTextCenter>
              ))
            }
          </List>
        </Paper>
      </Container>
  );
}