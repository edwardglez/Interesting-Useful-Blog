// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
// router.get('/:userId', ctrl.posts.posts)
router.get('/', ctrl.posts.posts)
router.post('/', ctrl.posts.createPost)
router.put('/:userId/:postId', ctrl.posts.editPost)
router.delete('/:userId/:postId', ctrl.posts.deletePost)

// exports
module.exports = router;