import '@testing-library/jest-dom';

const axios = require('axios')
jest.mock('axios')

describe("Data test", () => {

    it("mocking fetch covid data for per million endpoint in axios", () => {
        //arrange
        const mockedResponse = {data:{
                casesPerOneMillion: 65411,
                recoveredPerOneMillion: 58629.83,
                deathsPerOneMillion: 801.1
            }}
        axios.get.mockResolvedValue(mockedResponse);
        const fetchCovidDataForPerMillion = require('../../api/ChartIndex')

        // act
        fetchCovidDataForPerMillion.fetchCovidDataForMillion();

        //asserts
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith('https://disease.sh/v3/covid-19/all');
    })

    it("mocking fetch countries in axios", () => {
        //arrange
        const mockedResponse = {data:{
                countries: {
                    name: "Afghanistan",
                    iso2: "AF"
                }
            }}
        axios.get.mockResolvedValue(mockedResponse);
        const fetchCountries = require('../../api/ChartIndex')

        // act
        fetchCountries.fetchCountriesData();

        //asserts
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith('https://covid19.mathdro.id/api/countries');
    })

    it("mocking fetch covid data in axios", () => {
        //arrange
        const mockedResponse = {data:{
                confirmed: {
                    value: 99287,
                    detail: "https://covid19.mathdro.id/api/countries/Angola/confirmed"
                },
                recovered: {
                    value: 0,
                    detail: "https://covid19.mathdro.id/api/countries/Angola/recovered"
                },
                deaths: {
                    value: 1900,
                    detail: "https://covid19.mathdro.id/api/countries/Angola/deaths"
                },
                lastUpdate: "2022-04-26T05:20:49.000Z"
            }}
        axios.get.mockResolvedValue(mockedResponse);
        const fetchCovidData = require('../../api/ChartIndex')

        // act
        fetchCovidData.fetchCovidData();

        //asserts
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith(expect.anything());
    })

    it("mocking fetch daily covid data in axios", () => {
        //arrange
        const mockedResponse = {data:{
                confirmed: {
                    total: 557
                },
                deaths: {
                    total: 17
                }
            }}
        axios.get.mockResolvedValue(mockedResponse);
        const fetchDailyCovidData = require('../../api/ChartIndex')

        // act
        fetchDailyCovidData.fetchDailyCovidData();

        //asserts
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith('https://covid19.mathdro.id/api/daily');
    })

})