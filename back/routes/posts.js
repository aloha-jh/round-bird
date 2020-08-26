const express = require('express');
const db = require('../models');
const router = express.Router();



//게시글작성
router.get('/',async(req,res,next)=>{
    console.log('---------------------라우터들어왔음')
    try{
     const posts = await db.Post.findAll({
         include:[{
             model: db.User,
             attributes:['id','nickname']
         }],
         order:[['createdAt','DESC']]
     });
     console.log('-------------------'+posts);
     return res.json(posts);
    }catch(e){
        console.error(e);
        next(e);
    }
}); 


module.exports = router;