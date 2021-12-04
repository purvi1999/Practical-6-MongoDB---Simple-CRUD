const express = require("express");
const router = express.Router();
router.use(express.json());
const movie_data = require("../models/movie.js");
router.get("/", (req, res) => {
    
    return res.json({data1:movie_data});
});

//Add movie 
router.post("/Add_movie",(req,res)=>{
    const{newMovie}=req.body;
    const addNewMovie=movie_data.create(newMovie);
    return res.json({data:"New Movie info Added...",data1:addNewMovie});
});

//Delete movie - from movie name
router.delete("/Del_Movie_info/:id",async(req,res)=>{
    const deleteMovie=await movie_data.findOneAndDelete({moovie_id:req.params.id});
    if(deleteMovie==null)
    {
        return res.json({data:"Movie Id not Found..."});
    }
    else
    {
        return res.json({data:"Movie Info Deleted..."});
    }
});

//update movie -from movie name [update all info -type,rating,year
router.put("/Edit_Movie_info/:id",async(req,res)=>{
    const movie_id=req.params.id;
    const updateMovie=await movie_data.findOneAndUpdate(
        {movie_id:movie_id},
        {movie_name:req.body.movie_name,type:req.body.type,rating:req.body.rating},
        {new:true}
    );
    if(updateMovie==null)
    {
        return res.json({data:"Movie Id not found"});
    }else
    {
    return res.json({data:"Movie info updated..."});
    }
});

//display all movie info 
router.get("/Display_All_movie",async(req,res)=>{
    const data_get=await movie_data.find({});
    if(data_get!=null){
        return res.json({data:data_get});
    }
    else
    {
        return res.json({data:"No Data Found"});
    }
});

//display movie info from movie name
router.get("/movie_name/:m_name", async(req,res) => {
    const movie_name = req.params.m_name;
    var display_data = [];
    display_data = await movie_data.find({movie_name:movie_name});
    if(display_data==null)
    {
        res.json({data :"No Movie name found!!"});
    }
    else 
    {
        res.json({data:"Movie Information from movie name",data1:display_data});
    }
});

module.exports = router;