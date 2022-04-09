import axios from "axios";

// https://github.com/mathdroid/covid-19-api
const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchCovidData = async (country) => {
    let url = baseUrl;
    if (country) url = `${baseUrl}/countries/${country}`;

    try {
        const {
            data: {
                confirmed,
                recovered,
                deaths,
                lastUpdate
            }
        } = await axios.get(url);

        return {
            confirmed, recovered, deaths, lastUpdate
        };
    } catch (error) {
        return error;
    }
};

export const fetchCountriesData = async () => {
    try {
        const {data: {countries}} = await axios.get(`${baseUrl}/countries`)
        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
}

export const fetchDailyCovidData = async (country) => {
    try {
        const {data} = await axios.get(`${baseUrl}/daily`);
        return data.map(({confirmed, recovered, deaths, reportDate: date}) => (
            {
                confirmed: confirmed.total,
                recovered: recovered.total,
                deaths: deaths.total,
                date
            }
        ));
    } catch (error) {
        return error;
    }
}