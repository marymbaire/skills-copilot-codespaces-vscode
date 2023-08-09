// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import middleware
const auth = require('../middleware/auth');

// Import controller
const commentsCtrl = require('../controllers/comments');

// Create routes
router.get('/', auth, commentsCtrl.getAllComments);
router.post('/', auth, commentsCtrl.createComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

// Export module
module.exports = router;
