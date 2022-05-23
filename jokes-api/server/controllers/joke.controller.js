const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allTheJokes) => res.json({ jokes: allTheJokes }))
};

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
};

module.exports.findRandomJoke = (req, res) => {
  Joke.aggregate([{ $sample: { size: 1 } }])
    .then((oneRandomJoke) => res.json({ joke: oneRandomJoke }))
}

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong ...", error: err }));
};