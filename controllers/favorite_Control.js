const Favorite = require("../model/Favorite");

exports.getFavorite = async (req, res) => {
  try {
    const list = await Favorite.find();
    res.json(list);
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.addFavorite = (req, res) => {
  const favorite = new Favorite(req.body);

  favorite.save();
};

exports.deleteFavorite = (req,res)=>{
  Favorite.findOneAndDelete({
    movieId: req.body.movieId
  }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, doc });
  });
}

exports.editFavorite = async (req,res)=>{

  try{
    const id = {movieId: req.body.movieId};
    const updates = {movieRate: req.body.movieRate};

    const result = await Favorite.findOneAndUpdate(id,updates);
    res.send(result);
  }catch(err){
    res.json({ message: err.message });
  }
}
