 

export const initialState ={
   
    isLogginsOut : false,
     
    loginErrorReason:'', //로긴 실패 사유

    isSigningUp: false, //회원가입시도중
    singedUp: false, //회원가입 성공
    signUperrorReason:'', //회원가입 실패 사유

    myInfo : null, //내정보
    followingList:[],
    followerList:[],

    userInfo: null, //남의 정보
    
    //signUpData:{}, 이거왜빠짐?..
};

export const SING_UP_REQUEST = 'SING_UP_REQUEST';
export const SING_UP_SUCCESS = 'SING_UP_SUCCESS';
export const SING_UP_FAILURE = 'SING_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

//유저정보 불러오는액션
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; 
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; 
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
 
//팔로우 불러오기
export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST'; 
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

//팔로우하기
export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'; 
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

//언팔로우하기
export const UNFOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'; 
export const UNFOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

// 팔로우하는사람 제거
export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'; 
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'; // 머야
 



export const signUpAction = (data)=> ({
    type:SING_UP_SUCCESS,
    data,
})

export const signUpSuccess = {
    type:SING_UP_SUCCESS,
}

export const loginRequestAction = (data) =>({ 
    type: LOG_IN_REQUEST,
    data, 
})
export const logoutRequestAction ={
    type: LOG_OUT_REQUEST,
}

export const signUpRequestAction = (data) =>{
    return{
        type: SING_UP_REQUEST,
        data,
    }
}  

const reducer = ( state = initialState, action )=>{
    switch(action.type){
        case LOG_IN_REQUEST:{
            return{
                ...state, 
                logInErrorReason: '',
            }
        }
        case LOG_IN_SUCCESS:{
            return{
                ...state,
                
                myInfo: action.data, 
            }
        }
        case LOG_IN_FAILURE:{
            return{
                ...state,
                 
                myInfo: null,
                loginErrorReason: action.error,
            }
        }

        case LOG_OUT_REQUEST:{
            return{
                ...state,
                isLoggingOut:true,  
            }
        }
        case LOG_OUT_SUCCESS:{
            return{
                ...state,
                isLoggingOut: false,
               
                myInfo:null,
            }
        } 

        case LOAD_USER_REQUEST:{ 
            return{
                ...state,  
            }
        }
        case LOAD_USER_SUCCESS:{
            return{
                ...state, 
                myInfo:action.data,
            }
        }
        case LOAD_USER_FAILURE:{
            return{
                ...state,  
            }
        }

     

        
        case SING_UP_REQUEST:{
            return{
                ...state, 
                isSigningUp: true,
                isSignUp:false,
                signUperrorReason:'',
            }
        }
        case SING_UP_SUCCESS:{
            return{
                ...state, 
                isSigningUp: false,
                isSignUp:true, 
            }
        }
        case SING_UP_FAILURE:{
            return{
                ...state, 
                isSigningUp: false,
                signUperrorReason: action.error,
            }
        }
        default:{
            return{
                ...state,
            }
        } 
    }
}

export default reducer;