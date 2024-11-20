const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');


router.post('/', authorController.addAuthor);
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.put('/update/:id', authorController.UpdateAuthor);
router.delete('/delete/:id', authorController.DeleteAuthor);

module.exports = router;