import React ,{ useCallback ,useState, useEffect }from 'react'; 
import { useSelector , useDispatch } from 'react-redux'; 
import { IconButton, Button, CardMedia, CircularProgress }from '@material-ui/core'; 
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () =>{
    const dispatch = useDispatch();
    const { imagePaths ,postAdded, isAddingPost } = useSelector(state=>state.post);
    const [ textArea, setTextArea ] = useState('');


    useEffect(()=>{ 
        if(postAdded){
            setTextArea('');
        }
    },[postAdded])

    const onSubmitForm = useCallback((e)=>{ 
        e.preventDefault();
        if( !textArea.trim() ){
            return alert('게시글을 작성하려면 내용을 입력해야 합니다.');
        }
        dispatch({
            type:ADD_POST_REQUEST,
            data:{
                content:textArea,
            }
        })
    
    },[textArea]);

    const onChangeTextArea = useCallback((e)=>{
        setTextArea(e.target.value);
    },[textArea]);

    return(
        // <form encType="multipart/form-data" onSubmit={onSubmitForm}> 
        <form onSubmit={onSubmitForm}> 
            <textarea className="post-textarea" onChange={onChangeTextArea } value={textArea} 
            placeholder="오늘 하루는 어땠나요?" /> 
            <input type="file" multiple hidden  />
            <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
            </IconButton> 
            <Button type="submit" color="primary" style={{float:'right'}} > 
                올리기{isAddingPost && <CircularProgress />}
                </Button>
            {imagePaths && imagePaths.map( (v,i)=>{
                return(
                <><CardMedia 
                image={"http://localhost:3000/"+v} alt={v}
                /><Button>제거</Button>
                </>
                )
            })} 
        </form>
    )
}

export default PostForm;

             