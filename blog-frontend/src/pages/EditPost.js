import React, { useState } from 'react'
import posts from '../models/posts'
import Button from "react-bootstrap/Button"
import { useHistory } from 'react-router-dom'

const Editpost = (props) => {
    const [editPost, setEditPost] = useState(props.location.state)
    // handle update. handle submit

    // const handleUpdate = (id) => {
    //     console.log(id)
    //     posts.update(id)
    //         .then(data => {
    //             // console.log(data)
    //             setEditPost()
    //         })
    // }

    // useEffect(() => {
    //     console.log(props)

    // },[])

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
            <section class="profile-section">
                <div class="profile-card">
                    <h4> Edit {props.currentUser}'s post </h4>
                </div>
            </section>
            <section class="profile-section" >
                <form class="col login-form" onSubmit={handleSubmit}>
                    <div class="input-field col">
                        <label for="title">Title: </label><br />
                        <input id="new_post" type="text" class="validate" name="title" onChange={(e) => setEditPost({...editPost, title : e.target.value})} value={editPost.title}/>
                    </div>
                    <div class="input-field col">
                        <label for="firsts">Entry:</label><br />
                        <textarea id="blog_rntry" type="text" class="validate" name="body" onChange={(e) => setEditPost({...editPost, body: e.target.value})} value={editPost.body}/>
                    </div>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </form>
            </section>
        </div>
    )
}

export default Editpost
