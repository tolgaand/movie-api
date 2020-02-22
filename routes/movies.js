const express = require('express');
const router = express.Router();

//Models
const Movie = require("../models/Movie")


/* GET users listing. */
router.post('/', (req, res, next) => {
  const {
    title,
    imdb_score,
    category,
    country,
    year
  } = req.body;

  const movie = new Movie({
    title: title,
    category: category,
    imdb_score: imdb_score,
    country: country,
    year: year
  });

  const promise = movie.save();

  promise.then((data) => {
    res.json({
      status: 1
    });
  }).catch((err) => {
    console.log(err)
  });


});





module.exports = router;