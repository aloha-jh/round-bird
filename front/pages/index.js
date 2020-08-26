import React, { useEffect } from 'react';  
import { makeStyles } from '@material-ui/core/styles'; 

import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { useDispatch , useSelector } from 'react-redux';
import { loginAction } from '../reducers/user';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const useStyles = makeStyles((theme) => ({ 
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
})); 
const Home = () =>{
    const dispatch = useDispatch();

    const {myInfo} = useSelector( state => state.user);
    const {mainPosts} = useSelector( state => state.post );
    
    const classes = useStyles();

    //로드시 mainPosts 받아오기
    useEffect(()=>{
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
        })
    },[]);

    return(
        <> 
            {myInfo && 
                <PostForm />
            } 
            { mainPosts.map( (c)=>{
                return(
                   <PostCard post={c} key={c} />
                );
            })} 
        </>
    )
}

export default Home;