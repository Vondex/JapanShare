const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { categoryController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', categoryController.getCategories);
router.post('/', auth(), categoryController.createCategory);

router.get('/:categoryId', categoryController.getCategory);
router.post('/:categoryId', auth(), postController.createPost);
router.put('/:categoryId', auth(), categoryController.likeCategory);
router.put('/:categoryId/posts/:postId', auth(), postController.editPost);
router.delete('/:categoryId/posts/:postId', auth(), postController.deletePost);



module.exports = router