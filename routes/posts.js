const express = require('express');
const router = express.Router()
const PostController = require('../controllers/PostController');
const { authentication, isAuthor } = require('../middlewares/authentication');

router.post('/create', authentication, PostController.create) //ROUTE: Endpoint CREATE post
router.put('/update/:_id', authentication, isAuthor, PostController.update) // ROUTE: Endpoint UPDATE post
router.delete('/delete/:_id', authentication, isAuthor, PostController.delete) // ROUTE: Endpoint UPDATE post
router.get('/postsByTitle/:title', authentication, PostController.getPostByTitle) // ROUTE: Endpoint GET post by TITLE
router.get('/postsById/:_id', authentication, PostController.getById) // ROUTE: Endpoint GET post by ID
router.get('/getAllPosts', authentication, PostController.getAllPosts) // ROUTE: Endpoint GET ALL post + User Info + Comments attached
router.get('/getPostsPaginated', authentication, PostController.getAllPage) // ROUTE: Endpoint GET ALL post + User Info + Comments attached



module.exports = router;