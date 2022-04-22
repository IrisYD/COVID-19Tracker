import { Poll } from "@material-ui/icons";
import {Bar, Chart} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Polls() {
    const state1 = {
        labels: ['Fever', 'Quicker Heart Beat',
            'Headaches', 'Aches and Pains', 'Others'],
        datasets: [
            {
                label: 'Most Possible Side Effects after Vaccine',
                backgroundColor: 'rgba(73, 63, 252, 1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0,
                data: [80, 20, 59, 66, 90]
            }
        ]
    };

    const state2 = {
        labels: ['Cough', 'Fever', 'Shortness of Breath',
            'Headaches', 'Aches and Pains'],
        datasets: [
            {
                label: 'Most Possible Symtoms For Positive Cases',
                backgroundColor: 'rgb(0, 153, 204)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0,
                data: [65, 59, 80, 81, 56]
            }
        ]
    };


    const state3 = {
        labels: ['Cough', 'Fever', 'Shortness of Breath',
            'Headaches', 'Aches and Pains'],
        datasets: [
            {
                label: 'Mean Age for Most possible Symptoms',
                backgroundColor: 'rgb(0, 143, 118)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0,
                data: [45, 30, 24, 65, 70]
            }
        ]
    };



    return (
        <div>
            <div className='polls'>
                <Bar

                    data={state1}
                    options={{
                        title: {
                            display: true,
                            text: 'Most Possible Symtoms after Vaccine',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
            <div className='polls'>
                <Bar
                    data={state2}
                    options={{
                        title: {
                            display: true,
                            text: 'Most Possible Symtoms for Positive test',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
            <div className='polls'>
                <Bar
                    data={state3}
                    options={{
                        title: {
                            display: true,
                            text: 'Most Possible Symtoms for Positive test',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>

        </div>
    );
}

export default Polls;