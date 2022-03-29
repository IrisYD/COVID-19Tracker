import React from "react";
import {Circle, Popup} from "react-leaflet";

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 800,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 2000,
    },
};

export const sortData = (data) => {
    // const sortedData = [...data];
    return [...data].sort((a, b) => (a.cases > b.cases ? -1 : 1));
}

export const showDataOnMap = (data, casesType='cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillopacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
        >
            <Popup>
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    ></div>
                    <div className="info-name">
                        {country.country}
                    </div>
                    <div className="info-confirmed">
                        Cases: {country.cases}
                    </div>
                    <div className="info-recovered">
                        Recovered: {country.recovered}
                    </div>
                    <div className="info-deaths">
                        Deaths: {country.deaths}
                    </div>
                </div>
            </Popup>
        </Circle>
    ))
)