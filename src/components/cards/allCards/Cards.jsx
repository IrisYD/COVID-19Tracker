import React from "react";
import {Grid} from "@mui/material"
import CovidCard from "../card/Card";
import './Cards.css'

/**
 *
 * @param confirmed
 * @param recovered
 * @param deaths
 * @param lastUpdate
 * @returns {JSX.Element|string}
 */
const CovidCards = ({ data : {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) return "Loading...";

    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <CovidCard
                    className="infected"
                    cardTitle="Infected"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of Active Cases Infected with Covid-19"
                />
                <CovidCard
                    className="recovered"
                    cardTitle="Recovered"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of Recovered From Covid-19"
                />
                <CovidCard
                    className="deaths"
                    cardTitle="Deaths"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of Deaths Caused by Covid-19"
                />
            </Grid>
        </div>
    );
}

export default CovidCards;