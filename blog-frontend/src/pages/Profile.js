import React from 'react';
import NewPost from './NewPost'

const Profile = (props) => {

    return (
        <div>
            <h1>{props.currentUser}'s Blog</h1>
            <NewPost currentUser={props.currentUser} />
        </div>
    )
}

export default Profile


