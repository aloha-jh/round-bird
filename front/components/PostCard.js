import React ,{useState, useCallback, useEffect } from 'react';   
import { IconButton, Button, CardMedia, Card, TextField, List, ListItem, ListItemAvatar,ListItemText } from '@material-ui/core';   
import { CardHeader, Avatar, CardContent, CardActions, CircularProgress }from '@material-ui/core'; 
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {ADD_COMMENT_REQUEST} from '../reducers/post';
import { useSelector, useDispatch } from 'react-redux';
  
const useStyles = makeStyles((theme) => ({ 
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    }
}));

const PostCard = ({post}) =>{
    const classes = useStyles();
    
    const [commentFormOpened, setCommentFormOpened ] = useState(false);
    const [commentText, setCommentText ]=useState('');
    const {myInfo } = useSelector(state => state.user);
    const { CommentAdded , isAddingComment} = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onToggleComment = useCallback(() =>{
        setCommentFormOpened(prev=> !prev);
    },[]);

    const onChangeCommentText = useCallback((e) =>{
        setCommentText(e.target.value);
    },[]);

    //댓글 입력버튼클릭시
    const onSubmitComment = useCallback((e) =>{
        e.preventDefault();
        if( !myInfo.id ){
            return alert('로그인 필요');
        }
        dispatch({
            type:ADD_COMMENT_REQUEST,
            data:{
                postId:post.id,
            }
        })
    },[myInfo && myInfo.id]);

    useEffect(()=>{  
        setCommentText(''); 
    },[CommentAdded === true]);

    return(
        <>
        <hr/>
        <div key={+post.createdAt}>
            <CardHeader
                avatar={<Avatar aria-label={post.User.nickname[0]}></Avatar>}
                action={ <Button variant="contained" color="primary" disableElevation
                style={{marginTop:0}}>
                팔로잉</Button>}
                title={post.User.nickname}
                subheader={post.createdAt.split('T')[0]}
            />
            <CardContent>
                {post.content.split(/(#[^\s]+)/g).map(v=>{
                    if(v.match(/(#[^\s]+)/g) ){ //만약 #ㅇㅇ 면, 링크로.
                        return(
                            <Link href="/hashtag" key={v}><a>{v}</a></Link> 
                        )
                    }
                    return v;
                })}
            </CardContent>
            { post.img && <CardMedia 
            className={classes.media}
            image={ post.img} />}
        
            <CardActions disableSpacing>
                <List>
                    <ListItem>
                        <IconButton >
                            <FavoriteIcon />
                        </IconButton>  
                        <IconButton onClick={onToggleComment}>
                            <MessageIcon/>  
                        </IconButton>
                        {commentFormOpened &&  
                        <form onSubmit={onSubmitComment}>
                            <TextField value={commentText} onChange={onChangeCommentText}/>
                            <Button type="submit">
                                등록
                                {isAddingComment && <CircularProgress />}
                            </Button>
                        </form>
                        }
                    </ListItem> 
                        
                    {commentFormOpened && 
                        <>
                        <ListItem alignItems="flex-start">
                        <p>총 {post.Comments && post.Comments ? post.Comments.length : 0 }개의 댓글</p>
                        </ListItem>
                        {post.Comments !== 0 && post.Comments.map( (item)=>(
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar>
                                    {item.User.nickname[0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                            primary={item.User.nickname}
                            secondary={item.content +item.createdAt} 
                            />
                        </ListItem>    
                        ))}  
                        </>
                    }
                </List>
            </CardActions>
            
        </div>
        </>
    )
}

PostCard.postTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    })
}

export default PostCard;

             