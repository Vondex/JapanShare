const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', postController.getLatestsPosts);
router.get('/', postController.getPosts);
router.get('/:postId', postController.getPostById);

module.exports = router