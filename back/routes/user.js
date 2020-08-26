const express = require('express');
const db = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
 

//내정보가져오기
router.get('/', (req,res,next)=>{
     
    if(!req.user){ //req.user는 serialize가만들어줌!
        return res.status(401).send('로그인이 필요합니다');
    }
    const user = Object.assign({}, req.user.dataValues);
    user.Posts = [];    //
    user.Followings=[]; //
    user.Followers=[];  //임시
    delete user.password;
    
    return res.json(user);
});

//사용자등록
router.post('/', async (req,res ,next)=>{ //회원가입
    try{
        const reqUser = await db.User.findOne({  //이미 가입된 회원이면안되니까 검사하는데 이거는 따로 나눠서먼저하고 여기보내야되는거아닌가
            where:{
                userId: req.body.userId,
            }
        });
        if( reqUser ){
            return res.status(403).send('이미사용중인 아이디입니다');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
            gender: req.body.gender,
            birth: req.body.birth,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    }catch(e){
        console.error(e);
        //return res.status(403).send(e);
        return next(e);
    }
});

//아이디로 다른사람 정보가져오기 
router.get('/:id', (req,res,next)=>{
    
});

router.post('/logout', (req,res,next)=>{
     req.logout();
     req.session.destroy();
     res.send('logout 성공');
});
router.post('/login', (req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        console.log(err, user, info);
        if(err){
            console.error(err);
            next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginError)=>{
            if(loginError){
                return next(loginError);
            }
            const fullUser = await db.User.findOne({
                where:{id: user.id},
                include:[{
                    model:db.Post,
                    as:'Posts',
                    attributes:['id'],
                },{
                    model:db.User,
                    as:'Followings',
                    attributes:['id'],
                },{
                    model:db.User,
                    as:'Followers',
                    attributes:['id'],
                }],
                attributes:['id','nickname','userId']
            })

            // //const filteredUser = Object.assign({}, user);
            // const filteredUser = Object.assign({}, user.toJSON());
            // delete filteredUser.password;
            //return res.json(user);
            //return res.json(filteredUser);
            return res.json(fullUser);
        });
    })(req, res, next);
});

//팔로우 목록불러오기
router.get('/:id/follow', (req, res, next) =>{

});
// 팔로워 목록불러오기
// router.get('/:id/follow', (req, res, next) =>{

// });

//팔로우하기
router.post('/:id/follow', (req, res, next) =>{

});
//팔로우취소
router.delete('/:id/follow', (req, res, next) =>{

});
//팔로워삭제
router.delete('/:id/follower', (req, res, next) =>{

});

//해당유저의 포스트들 가져옴
router.get('/:id/posts', (req,res,next)=>{

});

module.exports = router;