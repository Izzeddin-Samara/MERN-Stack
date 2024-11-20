const Author = require('../models/Author');


const getValidationErrors = (error) => {
  if (error.name === 'ValidationError') {
    return Object.values(error.errors).map((e) => e.message);
  }
  return [error.message];
};

exports.addAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    const errors = getValidationErrors(error);
    res.status(400).json({ errors });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});
    res.json(authors);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.json(author);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.UpdateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.json(updatedAuthor);
  } catch (error) {
    const errors = getValidationErrors(error);
    res.status(400).json({ errors });
  }
};

exports.DeleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
