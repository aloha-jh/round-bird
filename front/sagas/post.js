import { all, fork, takeLatest, call, put, take, delay, takeEvery } from 'redux-saga/effects';
import {ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST,  
    LOAD_MAIN_POSTS_REQUEST,LOAD_MAIN_POSTS_SUCCESS,LOAD_MAIN_POSTS_FAILURE
     } from '../reducers/post';
import axios from 'axios';
  

function addPostAPI(data){ 
    return axios.post('/post', data, {
        withCredentials: true,
    });
} 
function* addPost( action ){
    try{ 
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        })
    }catch(e){
        console.error(e);
        yield put({
            type:ADD_POST_FAILURE
        })
    }
} 
function* watchAddPost(){
    yield takeEvery( ADD_POST_REQUEST, addPost)
}


// load posts

function loadMainPostsAPI(data){ 
    return axios.get('/posts');
      
} 
function* loadMainPosts( action ){
    try{ 
        const result = yield call(loadMainPostsAPI);
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: result.data,
        })
    }catch(e){
        console.error(e);
        yield put({
            type:LOAD_MAIN_POSTS_FAILURE
        })
    }
} 
function* watchLoadMainPosts(){
    yield takeEvery( LOAD_MAIN_POSTS_REQUEST, loadMainPosts)
}





export default function* postSaga(){
    yield all([
        fork( watchLoadMainPosts ), 
        fork( watchAddPost ), 
        
    ])
}