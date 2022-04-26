import React from 'react';


function Card(props) {
    const { user, post } = props;
    // const { username } = React.useContext(AppContext);

    const avatars = ['../images/spiderman.png', '../images/batman.png', '../images/wonderwomen.png', '../images/ironman.png'];

    const random = Math.floor(Math.random() * avatars.length);

    return <li>
        <div className='user'>
            <div className='avatar' style={{ backgroundImage: `url(${avatars[random]})` }} />
            <div className='user_name'><b>{post.userName || "unknown"}</b></div>
            <div>Age: {post.userAge}</div>
            {/* <div>No underlying disease</div> */}
        </div>
        <div className='info'>
            <div className='row'>
                <b><h4>{post.symptoms.map((symptom) => (
                    <span key={symptom}>{symptom}</span>
                ))}</h4></b>
            </div>
            <div className='row'>
            <span>Vaccine Taken:   <b>{post.vaccine ? post.vaccine : post.userVaccineBrand}</b></span>
            </div>
            <div className='row'>
            <span>Vaccine Status:   <b>{post.vaccineStatus ? post.vaccineStatus : post.userVaccineStatus}</b></span>
            </div>
            <div className='row'>
            <span>Test Result:   <b>{post.testResult ? post.testResult : "No Test Result"}</b></span>
            </div>
            <div className='row'>
                <span>Start To Show Symptoms:   <b>{post.startTime ? post.startTime : 'User did not choose the Start Time'}</b></span>
            </div>
            <div className='row comments-row'>
                <p>
                    {post?.comments}
                </p>
                <div className='comments'>
                    {/* {user?.age} */}
                </div>
            </div>
        </div>
    </li>
}

export default Card;