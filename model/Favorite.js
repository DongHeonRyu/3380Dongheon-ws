const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const favoriteSchema = mongoose.Schema(
  {
    movieId: {
      type: String,
      required:true
    },
    movieTitle: {
      type: String
    },
    movieRunTime: {
      type: String
    },
    movieRate:{
      type: Number
    }
  },
  { timestamps: true }
);

const Favorite = mongoose.model('Favorite', favoriteSchema); //1st모델의이름,2nd데이터
module.exports = Favorite; //다른파일에서사용가능
