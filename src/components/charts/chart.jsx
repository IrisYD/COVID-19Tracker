import React, {useState, useEffect} from "react";
import {Bar, Pie, Doughnut} from 'react-chartjs-2';
import {fetchDailyCovidData} from "../../api/ChartIndex";
import "./charts.css";
import numeral from "numeral";

const Chart = ({
                   chartType,
                   country,
                   data: {
                       confirmed,
                       // recovered,
                       deaths
                   }
               }) => {
    let dataForAllExceptLineChart;
    if (confirmed) {
        dataForAllExceptLineChart = {
            labels: ["Cases", "Deaths"],
            datasets: [
                {
                    label: "People",
                    backgroundColor: [
                        "rgba(0, 0, 255, 0.5)",
                        // "rgba(0, 255, 0, 0.5)",
                        "rgba(255, 0, 0, 0.5)"
                    ],
                    data: [confirmed.value, deaths.value],
                    radius: 150
                },
            ],
        };
    }
    const [dailyCovidData, setDailyCovidData] = useState({});

    useEffect(() => {
        const fetchDailyData = async () => {
            setDailyCovidData(await fetchDailyCovidData());
        };
        fetchDailyData();
    }, []);

    // Bar Chart
    const barChart = confirmed
        ? (
            <Bar
                    data={dataForAllExceptLineChart}
                    options={{
                    responsive: true,
                    // maintainAspectRatio: false,
                    aspectRatio: 2,
                    plugins: {
                        legend: false,
                        title: {
                            display: true
                        },
                    },
                    scales: {
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
                }}
            />
        )
        : null;

    // Doughnut Chart
    const doughnutChart = confirmed
        ? (
            <Doughnut
                data={dataForAllExceptLineChart}
                options={{
                    plugins: {
                        legend: true,
                        title: {
                            display: true
                        }
                    }

                }}
            />
        )
        : null;

    // Pie Chart
    const pieChart = confirmed
        ? (
            <Pie
                data={dataForAllExceptLineChart}
                options={{
                    plugins: {
                        legend:  {
                            display: true,
                        },
                        title: {
                            display: true
                        },
                    }
                }}
            />
        )
        : null;

    // // Polar Chart
    // const polarChart = confirmed
    //     ? (
    //         <PolarArea
    //             data={dataForAllExceptLineChart}
    //             options={{
    //                 plugins: {
    //                     legend: true,
    //                     title: {
    //                         display: true,
    //                         text: `Current State in ${country}`
    //                     }
    //                 }
    //             }}
    //         />
    //     )
    //     : null;

    // // Radar Chart
    // const radarChart = confirmed
    //     ? (
    //         <Radar
    //             data={dataForAllExceptLineChart}
    //             options={{
    //                 plugins: {
    //                     legend: false,
    //                     title: {
    //                         display: true,
    //                         text: `Current State in ${country}`
    //                     }
    //                 },
    //             }}
    //         />
    //     )
    //     : null;

    // // Line Chart
    // const lineChart = dailyCovidData[0]
    //     ? (
    //         <Line
    //             data={{
    //                 labels: dailyCovidData.map(({date}) => date),
    //                 datasets: [
    //                     {
    //                         data: dailyCovidData.map((data) => data.confirmed),
    //                         label: "Infected",
    //                         borderColor: "#3333ff",
    //                         fill: true
    //                     },
    //                     {
    //                         data: dailyCovidData.map((data) => data.deaths),
    //                         label: "Deaths",
    //                         borderColor: "red",
    //                         backgroundColor: "rgba(255, 0, 0, 0.5)",
    //                         fill: true
    //                     },
    //                 ],
    //             }}
    //             options={{
    //                 plugins: {
    //                     legend: false,
    //                     title: {
    //                         display: true,
    //                         text: `Current State in ${country}`
    //                     }
    //                 }
    //             }}
    //         />
    //     )
    //     : null;

    const chartToSend = () => {
        switch (chartType) {
            // case "Line (Global Data)":
            //     return lineChart;
            case "Bar":
                return barChart;
            case "Doughnut":
                return doughnutChart;
            case "Pie":
                return pieChart;
            // case "Polar":
            //     return polarChart;
            // case "Radar":
            //     return radarChart;
            default:
                return barChart;
        }
    };

    return (
        <div className="container">
            {
                // !country || country === "Global" ? lineChart : chartToSend()
                !country ? barChart : chartToSend()
            }
        </div>
    )
};

export default Chart;
