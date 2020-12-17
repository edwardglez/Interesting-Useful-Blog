import React, { useState } from 'react'
import posts from '../models/posts'
import Button from "react-bootstrap/Button"
import { useHistory } from 'react-router-dom'

const Editpost = (props) => {
    const [editPost, setEditPost] = useState(props.location.state)

    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(id)
        posts.update(editPost)
            .then(data => {
                history.push('/showpost')
            })
    }

    return (
        <div>
            {/* <section className="profile-section"> */}
                <div className="profile-card">
                    <h1> Edit {props.currentUser}'s post </h1>
                </div>
            {/* </section> */}
            {/* <section className="profile-section" > */}
                <form className="edit-post-form" onSubmit={handleSubmit}>
                    <div className="edit-title">
                        <label className="edit-title-label" for="title">Title: </label><br />
                        <input id="new_post" type="text" className="validate" name="title" onChange={(e) => setEditPost({...editPost, title : e.target.value})} value={editPost.title}/>
                    </div>
                    <div className="edit-body">
                        <label className="edit-body-label" for="firsts">Entry:</label><br />
                        <textarea rows="7" cols="50" id="blog_rntry" type="text" className="validate" name="body" onChange={(e) => setEditPost({...editPost, body: e.target.value})} value={editPost.body}/>
                    </div>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </form>
            {/* </section> */}
        </div>
    )
}

export default Editpost
