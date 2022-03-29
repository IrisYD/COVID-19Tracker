import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select, Card, CardContent } from '@mui/material';
import InfoBox from '../components/InfoBox';
import Map from '../components/Map';
import Table from '../components/Table';
import { sortData } from '../util';
import LineGraph from '../components/LineGraph';
import "leaflet/dist/leaflet.css";


function Data() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState({lat: 34.80746, lng: -40.4796});
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState("cases");

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data);
            })
    }, [])

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
            // fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2
                        }
                    ))
                    const sortedData = sortData(data)
                    setTableData(sortedData);
                    setCountries(countries);
                    setMapCountries(data);
                });
        };
        getCountriesData();
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        console.log('Country Code:', countryCode);
        const url = countryCode === "worldwide" ? 'https://disease.sh/v3/covid-19/all'
                                                : `https://disease.sh/v3/covid-19/countries/${countryCode}`
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(countryCode);
                setCountryInfo(data);
                setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                setMapZoom(4);
            })

        // https://disease.sh/v3/covid-19/all
        // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]

        console.log('Country Info:', countryInfo);
    }

    return (

            <div className='app-data'>

            <div className='app-data__left'>
                <div className='app-data__stats'>
                    <InfoBox
                        // onClick={(e) => setCasesType("cases")}
                        title="COVID Cases"
                        isRed
                        active={casesType === "cases"}
                        cases={countryInfo.todayCases}
                        total={countryInfo.cases}/>
                    <InfoBox
                        // onClick={(e) => setCasesType("recovered")}
                        title="Recovered"
                        active={casesType === "recovered"}
                        cases={countryInfo.todayRecovered}
                        total={countryInfo.recovered}/>
                    <InfoBox
                        // onClick={(e) => setCasesType("deaths")}
                        title="Death"
                        isRed
                        active={casesType === "deaths"}
                        cases={countryInfo.todayDeaths}
                        total={countryInfo.deaths}/>
                    <FormControl className="app-data__dropdown">
                        <Select variant="outlined" value={country} onChange={onCountryChange}>
                            <MenuItem value="worldwide">Worldwide</MenuItem>
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
            </div>

            <div className='app-data__right'>
            <Card >
                <CardContent>
                    <h3>Live Cases By Country</h3>
                    <Table countries={tableData}/>
                    <h3>World wide new cases</h3>
                    <LineGraph/>
                </CardContent>

            </Card>
            </div>
            </div>

    );
}

export default Data;
