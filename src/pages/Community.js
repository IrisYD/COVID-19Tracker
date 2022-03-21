import { Button } from '@mui/material';
import './Community.css';

function Community() {
    return <div className='community-container'>
        <ul className='cards'>
            <Card />
            <Card />
        </ul>
        <div className='symptoms'>
        <Button variant="contained" color="success">
        Share your symptoms
        </Button>
        </div>
    </div>
}

function Card() {
    return <li>
    <div className='user'>
        <div className='avatar' style={{backgroundImage: 'url(http://localhost:3000/coronavirus_icon.png)'}} />
        <div>Wonder Women</div>
        <div>Age: 28</div>
        <div>No underlying disease</div>
    </div>
    <div className='info'>
        <div className='row'>
            <span>Fever</span>
            <span>Headache</span>
        </div>
        <div className='row'>
            <span>Test Positive</span>
            <span>Omicron</span>
        </div>
        <div className='row'>
            <span>Start time: 02/19/2022</span>
            <span>Last time: 36 hours</span>
        </div>
        <div className='row comments-row'>
            <p>
                I start to have lalalalalalalalalalalala .... <br/>
                lalalalal 
            </p>
            <div className='comments'>
                28
            </div>
        </div>
    </div>
</li>
}

export default Community