const express = require('express');
const Posts = require('../models/posts');
const regulatory = require('../models/regulatory');

const router = express.Router();

//save

router.post('/post/save',(req,res) =>{

    let newPost = new Posts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).jason({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });

});

//regulatorySave


//get posts
router.get('/posts',(req,res)=>{
    Posts.find().exec((err,Posts)=>{
        if(err){
            return res.status(400).json({
                  error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Posts
        });
    });
});

//update details

router.patch("/postupdate/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  Posts.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
});

//find specific details
router.get("/manager/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  Posts.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
});

//delete details

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

            if(err) return res.status(400).json({
                message:"Dlete unsuccesful",err
            });

            return res.json({
                message:"Delete succesfull",deletedPost
            });
    });
});

module.exports = router;