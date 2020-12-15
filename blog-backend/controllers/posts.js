const db = require('../models');


// To obtain a list of all posts
// Read
const posts = (req, res) => {
    console.log(req.user)
    // by the userId, find all posts 
    db.posts.findAll({
        // find all by the userId
        where: {
            userId: req.user.id,
        }
    }).then((data) => {
        // Then take all that is found under the "data" and move it into a json to push to the frontend
        res.json(data)
    })
}

// Create a new blog post
// Create
const createPost = (req, res) => {
    // create
    console.log(req.body)
    // db.user.findByPk(req.body.userId).then(() => {
        db.posts.findOrCreate({
            where: {
                userId: req.body.userId,
                // postId: req.body.postId,
                body: req.body.body,
                title: req.body.title
            }
        }).then((newPosts) => {
            res.json({ newPosts, message: `New Post Created` })
        }).catch(err => console.log("Error at creation", err))
    // })
    // res.redirect('/showpost')
}

// To update the watching status.
// Update
// PUT can access body or params
const editPost = (req, res) => {
    db.user.findByPk(req.user.id).then(() => {
        db.posts.update(req.body.postId, {
            where: {
                postId: req.body.postId,
                body: req.body.body,
                title: req.body.title
            }
        }).then((editPosts) => {
            res.json({ editPosts, message: `Post has been updated.` })
        }).catch(err => console.log("Error at update", err))
    })
}

// to delete a post
// Delete
const deletePost = (req, res) => {
    db.post.findOne({
        where: {
            userId: req.body.userId,
            postId: req.body.postId
        }
    }).then((foundPost) => {
        foundPost.destroy().then(() => res.sendStatus(200))
    })
}

module.exports = {
    posts,
    createPost,
    editPost,
    deletePost
};