import axios from "axios";

const baseUrl = 'https://covid19.mathdro.id/api';

/**
 *
 * @param country
 * @returns {Promise<{recovered, lastUpdate, confirmed, deaths}|*>}
 */
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

/**
 *
 * @returns {Promise<*>}
 */
export const fetchCountriesData = async () => {
    try {
        const {data: {countries}} = await axios.get(`${baseUrl}/countries`)
        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
}

/**
 *
 * @param country
 * @returns {Promise<*>}
 */
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

/**
 *
 * @returns {Promise<{recoveredPerOneMillion, deathsPerOneMillion, casesPerOneMillion}|*>}
 */
export const fetchCovidDataForMillion= async () => {
    let urlForMillion = 'https://disease.sh/v3/covid-19/all';

    try {
        const { data: {
            casesPerOneMillion,
            recoveredPerOneMillion,
            deathsPerOneMillion
        }} = await axios.get(urlForMillion);

        return {
            casesPerOneMillion: casesPerOneMillion,
            recoveredPerOneMillion,
            deathsPerOneMillion
        };
    } catch (error) {
        return error;
    }
};