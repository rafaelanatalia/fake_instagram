var express = require('express');
var router = express.Router();

const PostsController = require('../constrollers/PostsController');

router.post('/posts', PostsController.create );

module.exports = router;
