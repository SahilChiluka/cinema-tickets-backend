const express = require("express");

const router = express.Router();

const {
    getMovies,
    insertMovies,
    getMoviebyId,
    editmovie,
    deletemovie,
    editseats,
    searchmovie
} = require("../controllers/moviecontroller");

router.route("/").get(getMovies);

router.route("/moviedetails/:id").get(getMoviebyId);

router.route("/insert").post(insertMovies);

router.route("/edit/:id").put(editmovie);

router.route("/editseats/:id").patch(editseats);

router.route("/delete/:id").delete(deletemovie);

router.route("/search").get(searchmovie);

module.exports = router;