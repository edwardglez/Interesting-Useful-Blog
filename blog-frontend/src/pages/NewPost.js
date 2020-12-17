import React, { useState } from 'react'
import posts from '../models/posts'
import { useHistory } from 'react-router-dom'

function NewPost(props) {

    // const [post, setPost] = useState('')

    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')

    let history = useHistory()

    const handleSubmit = (event) => {
        // to prevent default form functionality
        event.preventDefault() 
        posts.create(title, body)
            .then(data => {
                history.push('/showpost')
            })
    }
    return (
        <div>
            <section className="profile-section">
                <div className="profile-card">
                    <h4> {props.currentUser}'s post </h4>
                </div>
            </section>
            <section className="profile-section" >
                <form className="col login-form" method="POST" action="/posts">
                    <div className="input-field-title col">
                        <label for="title">Title: </label><br />
                        <input id="new_post" type="text" className="validate" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div className="input-field col">
                        <label for="firsts">Entry:</label><br />
                        <textarea rows="5" cols="50" id="blog_entry" type="text" className="validate" name="body" value={body} onChange={e => setBody(e.target.value)}/>
                    </div>
                    <button className="create-post" onClick={handleSubmit}>Create Post</button>
                </form>
            </section>
        </div>
    )
}

export default NewPost
