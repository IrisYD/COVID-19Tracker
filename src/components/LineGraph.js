import React, {useState, useEffect} from "react";
import {Line} from "react-chartjs-2";
import numeral from "numeral";

/**
 *
 * @type {{plugins: {legend: boolean}, elements: {point: {radius: number}}, scales: {yAxes: {ticks: {callback: (function(*=, *, *): *)}, grid: {display: boolean}}, xAxes: [{time: {format: string, tooltipFormat: string}, type: string}]}, maintainAspectRatio: boolean, tooltips: {mode: string, intersect: boolean, callbacks: {label: (function(*, *): *)}}}}
 */
const options = {
    plugins: {
        legend: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes:
            {
                grid: {
                    display: false
                },
                ticks: {
                    callback: function (value, index, values) {
                        return numeral(value).format("0a")
                    },
                },
            },
    },
};

/**
 *
 * @param data
 * @param casesType
 * @returns chartData
 */
const buildChartData = (data, casesType = "cases") => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};

/**
 *
 * @param casesType
 * @param props
 * @returns {JSX.Element}
 */
function LineGraph({casesType = "cases", ...props}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let chartData = buildChartData(data, casesType);
                    console.log(chartData);
                    setData(chartData);
                });
        };
        fetchData();
    }, [casesType]);

    return (
        <div className={props.className}>
            {data?.length > 0 && (
                <Line
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204, 16, 52, 0.5)",
                                borderColor: "#CC1034",
                                data: data,
                                fill: true,
                            },
                        ],
                    }}
                    options={options}
                />
            )}
        </div>
    );
}

export default LineGraph;