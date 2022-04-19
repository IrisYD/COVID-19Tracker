import React from 'react';
import {Doughnut} from "react-chartjs-2";
import "./charts.css";

const ChartForPerOneMillion =(props) => {
    console.log('Data passed into ChartForPerOneMillion:', props.data);
    let dataForPerOneMillion;
    if (props.data) {
        dataForPerOneMillion = {
            labels: ["CasesPerOneMillion", "RecoveredPerOneMillion", "DeathsPerOneMillion"],
            datasets:[
                {
                    label: "People",
                    backgroundColor: [
                        "rgba(0, 0, 255, 0.5)",
                        "rgba(0, 255, 0, 0.5)",
                        "rgba(255, 0, 0, 0.5)",
                    ],
                    data: [
                        props.data.casesPerOneMillion,
                        props.data.recoveredPerOneMillion,
                        props.data.deathsPerOneMillion
                    ]
                },
            ],
        };
    }

    return (
        <div>
            {props.data.casesPerOneMillion && (
                <Doughnut
                    data={dataForPerOneMillion}
                    options={{
                        plugins: {
                            legend: true,
                            title: {
                                display: true,
                            }
                        }

                    }}
                />
            )}
        </div>
    )
};

export default ChartForPerOneMillion;