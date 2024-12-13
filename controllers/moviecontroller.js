const movieModel = require("../models/movieSchema");

const getMovies = async (req, res) => {
  const movie = await movieModel.find();
  return res.status(200).json(movie);
};

const getMoviebyId = async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await movieModel.findById(id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        return res.status(200).json(movie)
    } catch(error) {
        console.log(error)
    }
}

const insertMovies = async (req, res) => {
  try {
    const movie = req.body;
    console.log(movie);
    const movieData = new movieModel(movie);
    await movieData.save();
    res.status(201).json({ msg: "Inserted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const editmovie = async (req, res) => {
  const id = req.params.id;
  try {
    const editmovie = await movieModel.findByIdAndUpdate(id, req.body, {
      new: true
      });
      if (!editmovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      return res.status(200).json({ msg: "Edited Successfully" });
  } catch (error) {
    console.log(error);
  }
}

const editseats = async(req, res) => {
  const id = req.params.id;
  try {
    const editseats = await movieModel.findByIdAndUpdate(id, {$set : {seats : req.body}}, {new : true});
      if (!editseats) {
        return res.status(404).json({ message: "Movie not found" });
      }
        return res.status(200).json({ msg: "Seats Edited Successfully" });
  } catch (error) {
    console.log(error);
  }
}

const deletemovie = async (req, res) => {
    const id = req.params.id;
    try {
      const deletemovie = await movieModel.findByIdAndDelete(id);
      if (!deletemovie) {
        return res.status(404).json({ message: "Movie not found" });
        }
        return res.status(200).json({ msg: "Deleted Successfully" });
    } catch (error) {
      console.log(error);
    }
  }

const searchmovie = async (req, res) => {
  const movietitle = req.body.title;
  console.log(movietitle);
  try {
    const searchmovie = await movieModel.find({ title: { $regex: movietitle }} );
    if (!searchmovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
      return res.status(200).json(searchmovie);
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
    getMovies,
    insertMovies,
    getMoviebyId,
    editmovie,
    deletemovie,
    editseats,
    searchmovie
}