import React from 'react'

function Editpost(props ) {
    return (
        <div>
            <section class="profile-section">
                <div class="profile-card">
                    <h4> Edit {props.currentUser}'s post </h4>
                </div>
            </section>
            <section class="profile-section" >
                <form class="col login-form" method="POST" action="" >
                    <div class="input-field col">
                        <label for="title">Title: </label><br />
                        <input id="new_post" type="text" class="validate" name="title" />
                    </div>
                    <div class="input-field col">
                        <label for="firsts">Entry:</label><br />
                        <textarea id="blog_rntry" type="text" class="validate" name="entry" />
                    </div>
                    {/* <div class="input-field col">
                        <label for="img">Post image url:</label>
                        <input id="baby_post_img" type="text" class="validate" name="img" />
                    </div> */}
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right"></i>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Editpost
