# **COVID-19 Tracker from Team 3**

## **_Project Summary:_** 
#### For 2 years, our life has been impacted by COVID 19. Especially for now, COVID-19 cases and hospitalizations in January 2022 were the highest since the beginning of the pandemic, fueled by the rapid spread of the Omicron variant. As of February 10, 2022, Omicron is still the predominant variant across the country.Our objectives for developing the Covid Tracker website are in the following aspects: 1. Provide timely data related to the spread of COVID-19(cases, hospitalized, death) across the world. Share the official guideline, policies, and latest news reported by authoritative agencies. 2. Provide users a platform to post their symptoms of vaccine/positive cases and check others' symptoms accordingly as a reference. 3. Give users a visualized sense of the most reported symptoms for vaccine/positive cases.


## **_Jira:_**
[Project Jira](https://6510sp22team3.atlassian.net/jira/software/projects/NCLF/boards/1)

## **_Methodology:_**
#### * Agile(scrum)

## **_Project team:_**
#### * Yi Deng, deng.yi1@northeastern.edu
#### * Cheng Zhao, zhao.cheng1@northeastern.edu
#### * Suying Liu, liu.suyi@northeastern.edu
#### * Zihan Li, li.zihan1@northeastern.edu

## **_The Repository_** 
This repository is where we (COVID-19 Tracker team) develop the COVID-19 Tracker web application. We work on [code](https://github.com/IrisYD/COVID-19Tracker) here. \

And we also publish our [project requirement](https://6510sp22team3.atlassian.net/wiki/spaces/~204731791/pages/229378/Project+Requirement), [issues](https://6510sp22team3.atlassian.net/jira/software/projects/NCLF/boards/1) and [meeting notes](https://6510sp22team3.atlassian.net/jira/software/projects/NCLF/pages) in Jira. 

This source code is available to everyone in this team.

## **_Main Functionality_** 
### Data Page
The infobox in the data page provides a basic functionality of displaying the covid-19 cases/recoverd/deaths of worldwide in total and specific countries.\
The map in the data page provides a visual image of these data. \
The charts in the data page includes visual imageg of constrast among data in different countries/worldwide, contrast of mortality rate between Covid-19 and flu, countries with highest people vaccinated per 100K population, and recovery rate of different regions.


### News Page
News page provides a wide range of news related to COVID-19 fetched from media.

### Health Page
Health page shared information for identifying the symptoms of COVID-19. 

### Community Page
Community Page is a place for the community to share their symptoms, vaccine status, vaccine brands, test result.\
Users can check the COVID test points nearby simply by entering their zip code in community page and do COVID-19 self assessment to see if any of their symptom matches COVID-19.\
Charts in community page shows some visual images of the information we gathered from users.

### Registration Page
Users can register here if they are interested in our website and sharing their thoughts.

### Login Page
Members could easily login to their account from this page. 

## **_Data source_**
API: \
The dashboard in data page is using [Open Disease Data API](https://disease.sh/) for fetching Covid data.
The news in news page is using [News API](https://newsapi.org/) for fetching news from media.

Data Source: \
The [Open Disease Data API](https://disease.sh/) is using [COVID-19 Data by Johns Hopkins CSSE](https://coronavirus.jhu.edu/), [COVID-19 Data by Worldometer](https://www.worldometers.info/coronavirus/), NYT, Apple, Government, [RAPS](raps.org) and [CDC](https://covid.cdc.gov/covid-data-tracker/#datatracker-home) as the data source.

The [News API](https://newsapi.org/) is collecting news from various media around the world

## **_Technologies_**
### MERN Stack
Front-end: [ReactJS](https://reactjs.org/), [Material UI](https://mui.com/)\
Back-end: [NodeJs](https://nodejs.org/en/)\
Database: [MongoDB](https://www.mongodb.com/)\
[Charts.js](https://www.chartjs.org/) is used to help draw the charts in data and community page.

## **_Test Plan_**
Web functionality is mainly tested by unit test and manual test.

## **_Deployed Version_**
Feel free to visit: 

## **_Presentation Docs_**
Feel free to check: 
