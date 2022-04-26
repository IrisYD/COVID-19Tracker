import React, {useEffect, useState} from 'react';
import {FormControl, MenuItem, Select, Card, CardContent, Typography, Box} from '@mui/material';
import InfoBox from '../components/InfoBox';
import Map from '../components/Map';
import Table from '../components/Table';
import {StatPrintFormat, sortData} from '../util';
import LineGraph from '../components/LineGraph';
import "leaflet/dist/leaflet.css";
import Chart from '../components/charts/chart';
import useDropDown from "../components/dropdownbox/dropdownMaker";
import {CHART_TYPES as chartsList} from '../components/charts/constants';
import './Data.css';
import {fetchCovidData, fetchCountriesData, fetchCovidDataForMillion} from "../api/ChartIndex";
import ChartForPerOneMillion from "../components/charts/ChartForPerOneMillion";
// import CovidCards from "../components/cards/allCards/Cards";

/**
 *
 * @returns the Data page
 *
 */
function Data() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    // {lat: 34.80746, lng: -40.4796} [34.80746, -40.4796]
    const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796});
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    // CovidCards for Charts data
    const [data, setData] = useState({});
    const [dataForPerOneMillion, setDataForPerOneMillion] = useState({});
    const [countryList, setCountryList] = useState([]);
    const [location, LocationDropDown] = useDropDown("Select a Country: ", "US", countryList);
    const [chartType, ChartTypeDropDown] = useDropDown("Select a Chart: ", "Bar", chartsList);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data);
            });
    }, []);

    // get countries data from API
    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2
                        }
                    ));
                    const sortedData = sortData(data);
                    setTableData(sortedData);
                    setCountries(countries);
                    setMapCountries(data);
                });
        };
        getCountriesData();
    }, []);

    /**
     *
     * @param event
     * @returns {Promise<void>}
     */
    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        console.log('Country Code:', countryCode);
        const url = countryCode === "worldwide" ? 'https://disease.sh/v3/covid-19/all'
            : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCountry(countryCode);
                setCountryInfo(data);
                console.log({lat: data['countryInfo'].lat, lng: data['countryInfo'].long});
                setMapCenter({lat: data['countryInfo'].lat, lng: data['countryInfo'].long});
                setMapZoom(4);
            });

        // https://disease.sh/v3/covid-19/all
        // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]

        // console.log('Country Info:', countryInfo);
    };

    // for charts' dropdown
    useEffect(() => {
        const fetchCountriesFromAPI = async () => {
            const countries = await fetchCountriesData();
            countries.unshift('Global');
            setCountryList(countries);
        };
        fetchCountriesFromAPI();
    }, []);

    // fetch covid data from API
    useEffect(() => {
        const getFromAPI = async (location) => {
            setData(await fetchCovidData(location));
        };

        location === 'Global' ? getFromAPI('') : getFromAPI(location);
    }, [location]);

    // fetch data for per one million from API
    useEffect(() => {
        const getPerOneMillionFromAPI = async () => {
            const data = await fetchCovidDataForMillion();
            console.log('fetchCovidDataForMillion', data);
            setDataForPerOneMillion(data);
        };

        getPerOneMillionFromAPI();
    }, []);

    return (
        <>
            <div className="app-data">

                <div className="app-data__left">
                    <div className="app-data__stats">
                        <InfoBox
                            onClick={e => setCasesType('cases')}
                            title="COVID Cases"
                            isRed
                            active={casesType === "cases"}
                            cases={StatPrintFormat(countryInfo.todayCases)}
                            total={StatPrintFormat(countryInfo.cases)}/>
                        <InfoBox
                            onClick={e => setCasesType('recovered')}
                            title="Recovered"
                            active={casesType === "recovered"}
                            cases={StatPrintFormat(countryInfo.todayRecovered)}
                            total={StatPrintFormat(countryInfo.recovered)}/>
                        <InfoBox
                            onClick={e => setCasesType('deaths')}
                            title="Deaths"
                            isRed
                            active={casesType === "deaths"}
                            cases={StatPrintFormat(countryInfo.todayDeaths)}
                            total={StatPrintFormat(countryInfo.deaths)}/>
                        <FormControl className="app-data__dropdown">
                            <Select variant="outlined" value={country} onChange={onCountryChange}>
                                <MenuItem value="worldwide" key={country}>Worldwide</MenuItem>
                                {
                                    countries.map(country => (
                                        <MenuItem value={country.value}>{country.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <Map
                        countries={mapCountries}
                        casesType={casesType}
                        center={mapCenter}
                        zoom={mapZoom}
                    />
                    <Card sx={{
                        marginTop: '36px',
                        marginBottom: '20px',
                        borderRadius: '12px',
                        flex: 1,
                        width: '100%',
                        height: {xs: '730px', s: '650px', md: '670px', lg: '670px', xl: '860px'}
                    }}>
                        <CardContent>
                            <h3>COVID Cases/Deaths In Countries</h3>
                            {/*<CovidCards data={data}/>*/}
                            <Typography textAlign={'center'}>
                                <LocationDropDown/>
                            </Typography>
                            <Typography textAlign={'center'}>
                                <ChartTypeDropDown/>
                            </Typography>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'stretch'}>
                                <Chart data={data} country={country} chartType={chartType} className="legendRoot"/>
                            </Box>
                        </CardContent>
                    </Card>
                    <iframe src="https://public.domo.com/cards/dLj4g" width="60%" height="400" marginHeight="0"
                            marginWidth="0" className="analyzed-graph-flu"
                            frameBorder="0"></iframe>
                </div>

                <div className="app-data__right">
                    <Card sx={{borderRadius: '12px'}}>
                        <CardContent>
                            <h3>Live Cases By Country</h3>
                            <Table countries={tableData}/>
                            <h3 className="app-data__graphTitle">Worldwide New {casesType}</h3>
                            <LineGraph className="app-data__graph" casesType={casesType}/>
                        </CardContent>
                    </Card>
                    <Card sx={{
                        display: 'block',
                        marginTop: '36px',
                        marginBottom: '20px',
                        borderRadius: '12px',
                        flex: 1,
                        width: '100%',
                        height: {xs: '600px', s: '650px', md: '670px', lg: '670px', xl: '600px'}
                    }}>
                        <CardContent>
                            <h3>Worldwide COVID Cases/Recovered/Deaths Per One Million</h3>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'stretch'}>
                                <ChartForPerOneMillion data={dataForPerOneMillion}/>
                            </Box>
                        </CardContent>
                    </Card>
                    <iframe
                        src="https://public.domo.com/cards/2kO6J"
                        height="600"
                        marginHeight="0"
                        marginWidth="0"
                        frameBorder="0"
                        className="analyzed-graph-vaccine"/>
                </div>
            </div>
            <Card sx={{
                marginTop: '36px',
                marginLeft: '20px',
                marginBottom: '40px',
                padding: '20px',
                borderRadius: '12px',
                flex: 1,
                width: '97%',
                height: '600px'
            }}>
                <CardContent>
                    {/*https://www.domo.com/covid19/data/*/}
                    <iframe src="https://public.domo.com/cards/dNl4L"
                            width="100%"
                            height="600"
                            marginHeight="0"
                            marginWidth="0"
                            frameBorder="0"/>
                </CardContent>
            </Card>
        </>
    );
}

export default Data;
