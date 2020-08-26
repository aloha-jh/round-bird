const express = require('express');
const router = express.Router();

const db = require('../models');
 
//게시글작성
router.post('/', async(req,res,next)=>{
    try{
        const hashtags = req.body.content.match(/#[^\s]+/g);  //(1)본문내용에서 #땡땡 해시태그달은 단어들 정규식으로 추출
        const newPost = await db.Post.create({ //올린사람아이디, 본문으로 newPost -> Post 테이블에 들어간다
            content: req.body.content,
            UserId: req.user.id,
        });

        if(hashtags){  // (1)의 태그들을 promiss.all로 전부 넣어줌.. 이게   (5-16강의 인데 그냥한번더들어라)
            const result = await Promise.all(
                hashtags.map(tag=>db.Hashtag.findOrCreate({
                    where:{name: tag.slice(1).toLowerCase()},
                }))
            )
            console.log(result);  /////
            await newPost.addHashtags(result.map(r=>r[0])); //이게..add로..Hashtags테이블에 추가하는거. 
            //포스트에 건너건너관계인  hashtag가 addHashtag메서드가생겨서.
        }

        //지금 보내고 나서 문제가 포스트정보만주니까 프론트에서 사용자정보없어져서 에러가 뜬다. 
        //사용자정보랑 포스트랑 묶어서 디자인해서 그런지?


        // const User = await newPost.getUser();
        // newPost.User = User;
        // res.json(newPost);


        //++
        const fullPost = await db.Post.findOne({
            where:{ id:newPost.id},
            include:[{
                model:db.User,
            }]
        });
        res.json(fullPost); 
        //res.json(newPost); //포스트정보만있어서 에러 (유저정보도있어야된다)

    }catch(e){
        console.error(e);
        next(e);
    }
});

//게시글가져오기
router.get('/',(req,res, next)=>{
 
});


router.get('/image',(req,res)=>{
 
});

module.exports = router;