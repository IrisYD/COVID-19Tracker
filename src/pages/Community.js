import './Community.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { AppContext } from '../context';




function getUsers() {
  return fetch("/users").then(resp => 
    {
    console.log("user")
    return resp.json()})
}

function getPosts() {
  return fetch("/posts").then(resp => {
    if(resp.status === 401){
      window.location.href = "/login"
    }
    return resp.json()
  }).catch(err => {
    console.log('@@@@err', err)
  })
}

function insertPost(post) {
  return fetch("/add_post", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
}

function Community() {
  const [open, setOpen] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const { username } = React.useContext(AppContext);

  const loadPosts = () => {
    getPosts().then((posts) => {
      posts.sort((a, b) => {
        return b._id > a._id ? 1 : -1
      })
      setPosts(posts);
    });
  }

  React.useEffect(() => {
    loadPosts();
  }, [])

  const handleClickOpen = () => {
    if (username) {
      setOpen(true);
    } else {
    window.location.href = "/login";
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPost = (newPost) => {
    console.log("# newPost", newPost);
    insertPost(newPost).then(resp => {
      if (resp.status === 200) {
        loadPosts();
      } else {
        alert("Add Post Error");
      }
    });

    setOpen(false);
  };

  const [value, setValue] = React.useState(null);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return <div className='community-container'>
    <ul className='cards'>
      {
        posts.map(post => {
          return <Card post={post} key={post._id} />;
        })
      }
    </ul>
    <div className='symptoms'>
      <div className='symtoms_button'>
      <Button variant="outlined" onClick={handleClickOpen}>
        Share Your Symptoms
      </Button>

      {open && <SymptomDialog onClose={handleClose} onSubmit={addPost} />}
      </div>
      <div>

        <Polls/>
        <div className='polls'>
            <h3>Have no idea about your symptom? Screening by yourself!</h3>
            <iframe src="https://my.castlighthealth.com/corona-virus-testing-sites/self-assessment/assessment.html?from=ABC" witdh="100%" frameborder="0" height="800px" ></iframe>
        </div>

      </div>

    </div>

  </div>
}
function SymptomDialog(props) {
  const { onClose, onSubmit } = props;
  const [scroll, setScroll] = React.useState('paper');

  const [symptom, setSymptom] = React.useState([]);
  const [vaccine, setVaccine] = React.useState(null);
  const [testResult, setTestResult] = React.useState(null);
  const [startTime, setStartTime] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [vaccineStatus, setVaccineStatus] = React.useState("");


  const [checked, setChecked] = React.useState(true);

  const onPost = () => {
    onSubmit({
      symptoms: symptom,
      vaccine,
      testResult,
      startTime,
      comments,
      vaccineStatus
    })
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked === true) {
      setSymptom([...symptom, event.target.value]);
    } else {
      const arr = symptom.filter((item) => item !== event.target.value);
      setSymptom(arr);

    }

  };

  return <Dialog open onClose={onClose}>
    <DialogTitle id="scroll-dialog-title">Share your symptoms</DialogTitle>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <DialogContent dividers={scroll === 'paper'}>
      <FormControl>

      
      <FormLabel component="legend" className='formTitle'>Choose Your Symptoms (Required)</FormLabel>
      <FormGroup aria-label="position" className='formContent' row>

        <FormControlLabel
        
          value="Fever"
          control={<Checkbox 
            onChange={handleChange}/>}
          label="Fever"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Cough"
          control={<Checkbox onChange={handleChange}/>}
          label="Cough"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Shortness of Breath"
          control={<Checkbox onChange={handleChange}/>}
          label="Shortness of Breath"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Headaches"
          control={<Checkbox onChange={handleChange}/>}
          label="Headaches"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Aches and Pains"
          control={<Checkbox onChange={handleChange}/>}
          label="Aches and Pains"
          labelPlacement="end"
        />

      </FormGroup>
    
        <span></span>
        <FormLabel component="legend" className='formTitle'>Choose your Vaccine (optional)</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className='formContent'
            onChange={(_, value) => {
              setVaccine(value)
            }}
          >
            <FormControlLabel value="Pfizer" control={<Radio />} label="Pfizer" />
            <FormControlLabel value="Moderna" control={<Radio />} label="Moderna" />
            <FormControlLabel value="Johnson Johnsonj" control={<Radio />} label="JohnsonJohnson" />
            <FormControlLabel value="Other" control={<Radio />} label="other" />
          </RadioGroup>
          <span></span>

          <FormLabel component="legend" className='formTitle'>Your Vaccine Status (optional)</FormLabel>
          <RadioGroup
            column="true"
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(_, value) => {
              setVaccineStatus(value)
            }}
          >
            <FormControlLabel value="Fully Vaccined" control={<Radio />} label="Fully Vaccined" />
            {/* <FormHelperText>2 does for Pfizer and moderna, 1 for JohnsonJohnson</FormHelperText> */}
            <FormControlLabel value="Only 1 Does" control={<Radio />} label="Only 1 does" />
            {/* <FormHelperText>Don't choose it if you took JohnsonJohnson</FormHelperText> */}
            <FormControlLabel value="None" control={<Radio />} label="None" />
          </RadioGroup>

          <span></span>

          <FormLabel component="legend" className='formTitle'>Tell us the recent Test Results you have (optional)</FormLabel>
          <RadioGroup
            column="true"
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(_, value) => {
              setTestResult(value)
            }}
          >
            <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
            <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
            <FormControlLabel value="None" control={<Radio />} label="Not Applicable" />
          </RadioGroup>
          <span></span>
          <FormLabel component="legend" className='formTitle'>Choose a Date you started to show symptoms</FormLabel>


          <TextField
            id="standard-textarea"
            label="Date to show symptoms"
            placeholder="MM/DD/YYYY"
            multiline
            variant="standard"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value)
            }}
          />

<span></span>
<FormLabel component="legend" className='formTitle'>Leave Your Words for other users</FormLabel>


          <TextField
            id="standard-textarea"
            label="Comments"
            placeholder="Leave your comments"
            multiline
            variant="standard"
            value={comments}
            onChange={(e) => {
              setComments(e.target.value)
            }}
          />
        </FormControl>
      </DialogContent>
    </Box>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onPost}>Post</Button>
    </DialogActions>
  </Dialog>
}

function Card(props) {
  const { user, post } = props;
  const { username } = React.useContext(AppContext);

  return <li>
    <div className='user'>
      <div className='avatar' style={{ backgroundImage: `url(${user?.avatar ? user.avatar : '../images/spiderman.png'})` }} />
      <div className='user_name'><b>{username}</b></div>
      <div>Age: 38</div>
      {/* <div>No underlying disease</div> */}
    </div>
    <div className='info'>
      <div className='row'>
      <b><h4>{post.symptoms.map((symptom) => (
        <span>{symptom}</span>
      ))}</h4></b>
      </div>
      <div className='row'>
        <span>Vaccine Taken:   <b>{post.vaccine ? post.vaccine: 'User did not add the vaccination information'}</b></span>
      </div>
      <div className='row'>
        <span>Vaccine Status:   <b>{post.vaccineStatus ? post.vaccineStatus : 'N/A' }</b></span>
      </div>
      <div className='row'>
        <span>Test Result:   <b>{post.testResult? post.testResult: 'No Test Result'}</b></span>
      </div>
      <div className='row'>
        <span>Start To Show Symptoms:   <b>{post.startTime ? post.startTime: 'User did not choose the Start Time'}</b></span>
      </div>
      <div className='row comments-row'>
        <p>
          {post?.comments}
        </p>
        <div className='comments'>
          {user?.age}
        </div>
      </div>
    </div>
  </li>
}

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
        data: [45, 30, 24 , 65, 70]
      }
    ]
  };

  
  
  return (
        <div>
          <div className='polls'>
          <Bar
          
            data={state1}
            options={{
              title:{
                display:true,
                text:'Most Possible Symtoms after Vaccine',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
          </div>
          <div className='polls'>
          <Bar
            data={state2}
            options={{
              title:{
                display:true,
                text:'Most Possible Symtoms for Positive test',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
          </div>
          <div className='polls'>
          <Bar
            data={state3}
            options={{
              title:{
                display:true,
                text:'Most Possible Symtoms for Positive test',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
          </div>
          
        </div>
      );
    }
  


export default Community