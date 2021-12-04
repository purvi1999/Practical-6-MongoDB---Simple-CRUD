const { Double } = require("bson");
const mongoose=require("mongoose");
const MovieSchema=mongoose.Schema({
    //key and datatype
    movie_id:String,
    movie_name:String,
    type:String,
    rating:String,
    year:Number,
    price:Number,
    lang:String
});

const MovieModel=mongoose.model("DBMovie_Show",MovieSchema,"DBMovie_Show");
module.exports=MovieModel;