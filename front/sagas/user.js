import { all, fork, takeLatest, call, put, take, delay, takeEvery } from 'redux-saga/effects';
import {LOG_IN_SUCCESS, LOG_IN_FAILURE, SING_UP_REQUEST, 
    LOG_IN_REQUEST, SING_UP_SUCCESS, SING_UP_FAILURE, 
    LOG_OUT_REQUEST,LOG_OUT_SUCCESS, LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,LOAD_USER_FAILURE } from '../reducers/user';
import axios from 'axios';
 

function loginAPI(loginData){ 
    return axios.post('/user/login', loginData, {
        withCredentials: true,
    });
} 
function* login( action ){
    try{ 
        const result = yield call(loginAPI, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        })
    }catch(e){
        console.error(e);
        yield put({
            type:LOG_IN_FAILURE
        })
    }
} 
function* watchLogin(){
    yield takeEvery( LOG_IN_REQUEST, login)
}

function signUpAPI( signUpData ){
    return axios.post('/user/',signUpData);
}
function* signUp(action){  //LOG_OUT_REQUEST 의 액션인자 임. 데이터가여기들어있다!
    try{ 
        yield call(signUpAPI, action.data);  //call 매서드가 첫번째는 함수고 두번째는 인자(첫번째함수에 인자로전달되는인자).
        //throw new Error('에러');
        yield put({
            type: SING_UP_SUCCESS,
        });
    }catch(e){
        console.error(e);
        yield put({
            type:SING_UP_FAILURE,
            error:e
        })
    }
}  
function* watchSignUp(){
    yield takeEvery( SING_UP_REQUEST, signUp)
}


function logoutAPI(  ){
    return axios.post('/user/logout',{},{
        withCredentials:true,
    });
}
function* logout(){   
    try{ 
        yield call(logoutAPI );    
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    }catch(e){
        console.error(e);
        yield put({
            type:LOG_OUT_FAILURE,
            error:e
        })
    }
}  
function* watchLogout(){
    yield takeEvery( LOG_OUT_REQUEST, logout)
}


function loadUserAPI(   ){
    
    return axios.get('/user/',{
        withCredentials:true,
    });
}
function* loadUser( ){   
    try{  
        const result = yield call(loadUserAPI); 
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    }catch(e){
        console.error(e);
        yield put({
            type:LOAD_USER_FAILURE,
            error:e
        })
    }
}  
function* watchLoadUser(){ 
    yield takeEvery( LOAD_USER_REQUEST, loadUser)
}




export default function* userSaga(){
    yield all([
        fork( watchSignUp ),
        fork( watchLogin ), 
        fork( watchLoadUser ),
        fork( watchLogout),
    ])
}