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

function getUsers() {
  return fetch("/users").then(resp => resp.json())
}

function getPosts() {
  return fetch("/posts").then(resp => resp.json())
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
    setOpen(true);
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Share Your Symptoms
      </Button>

      {open && <SymptomDialog onClose={handleClose} onSubmit={addPost} />}
    </div>
  </div>
}

const symptoms = [
  {
    value: 'Cough',
  },
  {
    value: 'Fever',
  },
  {
    value: 'Shortness of Breath',
  },
  {
    value: 'Headache',
  },
];

function SymptomDialog(props) {
  const { onClose, onSubmit } = props;
  const [scroll, setScroll] = React.useState('paper');

  const [symptom, setSymptom] = React.useState("");
  const [vaccine, setVaccine] = React.useState(null);
  const [testResult, setTestResult] = React.useState(null);
  const [startTime, setStartTime] = React.useState("");
  const [comments, setComments] = React.useState("");

  const onPost = () => {
    onSubmit({
      symptoms: symptom,
      vaccine,
      testResult,
      startTime,
      comments
    })
  }

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
        <DialogContentText>
          Share your symptoms in our community, connect with each other.
        </DialogContentText>

        <TextField
          id="outlined-select-currency"
          select
          value={symptom}
          onChange={(event, v) => {
            setSymptom(event.target.value)
          }}
          helperText="Please select your symptom"
          variant="standard"
        >
          {symptoms.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <span></span>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Vaccine</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(_, value) => {
              setVaccine(value)
            }}
          >
            <FormControlLabel value="pfizer" control={<Radio />} label="Pfizer" />
            <FormControlLabel value="moderna" control={<Radio />} label="Moderna" />
            <FormControlLabel value="jj" control={<Radio />} label="JohnsonJohnson" />
            <FormControlLabel value="other" control={<Radio />} label="other" />
          </RadioGroup>
          <FormLabel component="legend">Vaccine status</FormLabel>
          <RadioGroup
            column="true"
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="fullyVaccined" control={<Radio />} label="Fully Vaccined" />
            {/* <FormHelperText>2 does for Pfizer and moderna, 1 for JohnsonJohnson</FormHelperText> */}
            <FormControlLabel value="1 does" control={<Radio />} label="Only 1 does" />
            {/* <FormHelperText>Don't choose it if you took JohnsonJohnson</FormHelperText> */}
            <FormControlLabel value="None" control={<Radio />} label="None" />
          </RadioGroup>

          <FormLabel component="legend">Share Your Recent Test Results</FormLabel>
          <RadioGroup
            column="true"
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(_, value) => {
              setTestResult(value)
            }}
          >
            <FormControlLabel value="positive" control={<Radio />} label="Positive" />
            {/* <FormHelperText>2 does for Pfizer and moderna, 1 for JohnsonJohnson</FormHelperText> */}
            <FormControlLabel value="negative" control={<Radio />} label="Negative" />
            {/* <FormHelperText>Don't choose it if you took JohnsonJohnson</FormHelperText> */}
            <FormControlLabel value="none" control={<Radio />} label="Not Applicable" />
          </RadioGroup>
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

  return <li>
    <div className='user'>
      <div className='avatar' style={{ backgroundImage: `url(${user?.avatar ? user.avatar : '../images/spiderman.png'})` }} />
      <div className='user_name'><b>{user?.name}</b></div>
      <div>Age: {user?.age}</div>
      <div>No underlying disease</div>
    </div>
    <div className='info'>
      <div className='row'>
        <b><span>{post.symptoms}</span></b>
      </div>
      <div className='row'>
        <span>Test Result:   <b>{post.testResult}</b></span>
      </div>
      <div className='row'>
        <span>Start To Show Symptoms:   <b>{post.startTime}</b></span>
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

export default Community