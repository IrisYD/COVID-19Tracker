import { Poll } from "@material-ui/icons";
import {Bar, Chart} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Polls(props) {
    const { posts } = props;

    const heartBAfterVaccine = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let vaccineStatus = posts[i].vaccineStatus;
          let testResult = posts[i].testResult;
          if (vaccineStatus !== "Not vaccinated" && testResult !== "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Quicker Heart Beat") {
                count++;
              }
            }
          }
        }
        return count;

    
      }

    
      const feverAfterVaccine = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let vaccineStatus = posts[i].vaccineStatus;
          let testResult = posts[i].testResult;
          if (vaccineStatus !== "Not vaccinated" && testResult !== "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Fever") {
                count++;
              }
            }
          }
        }
        return count;

    
      }

    
      const headacheAfterVaccine = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let vaccineStatus = posts[i].vaccineStatus;
          let testResult = posts[i].testResult;

          if (vaccineStatus !== "Not vaccinated"&& testResult !== "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Headaches") {
                count++;
              }
            }
          }
        }
        return count;

      }
    
      const painAfterVaccine = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let vaccineStatus = posts[i].vaccineStatus;
          let testResult = posts[i].testResult;

          if (vaccineStatus !== "Not vaccinated"&& testResult !== "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Aches and Pains") {
                count++;
              }
            }
          }
        }
        return count;

      }
    
      const otherAfterVaccine = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let vaccineStatus = posts[i].vaccineStatus;
          let testResult = posts[i].testResult;

          if (vaccineStatus !== "Not vaccinated"&& testResult !== "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Shortness of Breath") {
                count++;
              }
            }
          }
        }
        return count;

      }

      const coughAfterPositive = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let testResult = posts[i].testResult;
          if (testResult === "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Cough") {
                count++;
              }
            }
          }
        }
        return count;

    
      }

    
      const feverAfterPositive = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let testResult = posts[i].testResult;
          if (testResult === "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Fever") {
                count++;
              }
            }
          }
        }
        return count;

    
      }

    
      const headacheAfterPositive = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let testResult = posts[i].testResult;

          if (testResult === "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Headache") {
                count++;
              }
            }
          }
        }
        return count;

      }
    
      const painAfterPositive = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let testResult = posts[i].testResult;

          if (testResult === "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Aches and Pains") {
                count++;
              }
            }
          }
        }
        return count;

      }
    
      const breathAfterPositive = (posts) => {
        let count = 0

        for (let i = 0; i < posts.length; i++) {
          let testResult = posts[i].testResult;

          if (testResult === "Positive" ) {
            let symptomOfPost = posts[i].symptoms
            for (let j = 0; j < symptomOfPost.length; j++) {
              if (symptomOfPost[j] == "Shortness of Breath") {
                count++;
              }
            }
          }
        }
        return count;
      }

      const coughAveAge = (posts) => {
        let count = 0
        let allAge = 0

        for (let i = 0; i < posts.length; i++) {
          let symptoms = posts[i].symptoms;
          let userAge = posts[i].userAge;
  

            for (let j = 0; j < symptoms.length; j++) {
              if (symptoms[j] == "Cough") {
                count++;
                allAge += userAge;
              }
            }
          }
        
        
        return Math.round(allAge/count);
      }

      const feverAveAge = (posts) => {
        let count = 0
        let allAge = 0

        for (let i = 0; i < posts.length; i++) {
          let symptoms = posts[i].symptoms;
          let userAge = posts[i].userAge;
  

            for (let j = 0; j < symptoms.length; j++) {
              if (symptoms[j] == "Fever") {
                count++;
                allAge += userAge;
              }
            }
          }
        
        
        return Math.round(allAge/count);
      }

      const breathAveAge = (posts) => {
        let count = 0
        let allAge = 0

        for (let i = 0; i < posts.length; i++) {
          let symptoms = posts[i].symptoms;
          let userAge = posts[i].userAge;
  

            for (let j = 0; j < symptoms.length; j++) {
              if (symptoms[j] == "Shortness of Breath") {
                count++;
                allAge += userAge;
              }
            }
          }
        
        
        return Math.round(allAge/count);
      }

      const headacheAveAge = (posts) => {
        let count = 0
        let allAge = 0

        for (let i = 0; i < posts.length; i++) {
          let symptoms = posts[i].symptoms;
          let userAge = posts[i].userAge;
  

            for (let j = 0; j < symptoms.length; j++) {
              if (symptoms[j] == "Headaches") {
                count++;
                allAge += userAge;
              }
            }
          }
        
        
        return Math.round(allAge/count);
      }

      const painAveAge = (posts) => {
        let count = 0
        let allAge = 0

        for (let i = 0; i < posts.length; i++) {
          let symptoms = posts[i].symptoms;
          let userAge = posts[i].userAge;
  

            for (let j = 0; j < symptoms.length; j++) {
              if (symptoms[j] == "Aches and Pains") {
                count++;
                allAge += userAge;
              }
            }
          }
        
        
        return Math.round(allAge/count);
      }


    const state1 = {
        labels: ['Fever', 'Quicker Heart Beat',
            'Headaches', 'Aches and Pains', 'Others'],
        datasets: [
            {
                label: 'Most Possible Side Effects after Vaccine',
                backgroundColor: 'rgba(73, 63, 252, 1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0,
                data: [feverAfterVaccine(posts), heartBAfterVaccine(posts), headacheAfterVaccine(posts), painAfterVaccine(posts), otherAfterVaccine(posts)]
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
                data: [coughAfterPositive(posts), feverAfterPositive(posts), breathAfterPositive(posts), headacheAfterPositive(posts), painAfterPositive(posts)]
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
                data: [coughAveAge(posts), feverAveAge(posts), breathAveAge(posts), headacheAveAge(posts), painAveAge]
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