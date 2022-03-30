import React from "react";
import {Circle, Popup} from "react-leaflet";
import numeral from "numeral";

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 200,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 1200,
    },
};

export const sortData = (data) => {
    // const sortedData = [...data];
    return [...data].sort((a, b) => (a.cases > b.cases ? -1 : 1));
}

export const StatPrintFormat = (stat) =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType="cases") => (
    data.map(country => {
        // console.log(country);
        return (
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
                            style={{backgroundImage: `url(${country.countryInfo.flag})`}}
                        ></div>
                        <div className="info-name">
                            {country.country}
                        </div>
                        <div className="info-confirmed">
                            Cases: {numeral(country.cases).format("0, 0")}
                        </div>
                        <div className="info-recovered">
                            Recovered: {numeral(country.recovered).format("0, 0")}
                        </div>
                        <div className="info-deaths">
                            Deaths: {numeral(country.deaths).format("0, 0")}
                        </div>
                    </div>
                </Popup>
            </Circle>
        );
    })
)