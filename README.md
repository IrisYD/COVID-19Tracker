# **COVID-19 Tracker from Team 3**

## **_Project Summary:_** 
#### For 2 years, our life has been impacted by COVID 19. Especially for now, COVID-19 cases and hospitalizations in January 2022 were the highest since the beginning of the pandemic, fueled by the rapid spread of the Omicron variant. As of February 10, 2022, Omicron is still the predominant variant across the country.Our objectives for developing the Covid Tracker website are in the following aspects: 
#### 1. Provide timely data related to the spread of COVID-19(cases, hospitalized, death) across the world. Share the official guideline, policies, and latest news reported by authoritative agencies. 
#### 2. Provide users a platform to post their symptoms of vaccine/positive cases and check others' symptoms accordingly as a reference. 
#### 3. Give users a visualized sense of the most reported symptoms for vaccine/positive cases.


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
This repository is where we (COVID-19 Tracker team) develop the COVID-19 Tracker web application. We work on [code](https://github.com/IrisYD/COVID-19Tracker) here.

And we also publish our [project requirement](https://6510sp22team3.atlassian.net/wiki/spaces/~204731791/pages/229378/Project+Requirement), [issues](https://6510sp22team3.atlassian.net/jira/software/projects/NCLF/boards/1) and [meeting notes](https://6510sp22team3.atlassian.net/jira/software/projects/NCLF/pages) in Jira. 

This source code is available to everyone in this team.

## **_Main Functionalities_** 
### Data Page
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/90656721/164166261-f2b66e35-e76d-4613-9d0e-fae457a92f9f.png">
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/90656721/164166567-affcea0f-617c-4808-ba18-2eb930335f6f.png">

1) The infobox in the data page provides a basic functionality of displaying the covid-19 cases/recoverd/deaths of worldwide in total and specific countries.
2) The map in the data page provides a visual image of these data. 
3) The charts in the data page includes visual imageg of constrast among data in different countries/worldwide, contrast of mortality rate between Covid-19 and flu, countries with highest people vaccinated per 100K population, and recovery rate of different regions.

### Community Page
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/90656721/164167277-45499fbd-cb56-42b0-9fc8-67e285976bd7.png">
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/90656721/164168019-6b85c527-add8-47d3-92ed-4f3126b77fbf.png">

1) Community Page is a place for the community to share their symptoms, vaccine status, vaccine brands, test result.
2) Users can check the COVID test points nearby simply by entering their zip code in community page and do COVID-19 self assessment to see if any of their symptom matches COVID-19.
3) Charts in community page shows some visual images of the information we gathered from users.

### Health Page
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/90656721/164168290-b0b03a8f-764b-4f6a-9cb2-2bdcd491773b.png">

Health page shared information for identifying the symptoms of COVID-19. 

### News Page
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/90656721/164168394-44bd6772-1ee2-4825-99ce-3ba747fe514b.png">

News page provides a wide range of news related to COVID-19 fetched from media.

### Registration Page
Users can register here if they are interested in our website and sharing their thoughts.

### Login Page
Members could easily login to their account from this page. 

### Profile Page
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/90656721/164168519-9aff9efa-7da0-4f1d-87f2-94f05919e4b1.png">

Members could easily edit their profile in this page.

## **_Data source_**
API: \
The dashboard in data page is using [Disease.sh API](https://disease.sh/) for fetching Covid data.
The news in news page is using [News API](https://newsapi.org/) for fetching news from media.

Data Source: \
The [Disease.sh API](https://disease.sh/) is using [COVID-19 Data Repository by Johns Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series), [COVID-19 Data by Worldometer](https://www.worldometers.info/coronavirus/), [COVID-19 Data Repository by New York Times](https://github.com/nytimes/covid-19-data) and [CDC](https://covid19.ncdc.gov.ng/) as the data source.

The [News API](https://newsapi.org/) is collecting news from various media around the world.

## **_Technologies_**
### MERN Stack
Front-end: [ReactJS](https://reactjs.org/), [Material UI](https://mui.com/)\
Back-end: [NodeJs](https://nodejs.org/en/), [ExpressJs](https://expressjs.com/)\
Database: [MongoDB](https://www.mongodb.com/)\
[Charts.js](https://www.chartjs.org/) is used to help draw the charts in data and community page.

## **_Test Plan_**
Web functionality is mainly tested by unit test and manual test.

## **_Deployed Version_**
Feel free to visit: 

## **_Presentation Docs_**
Feel free to check: 
