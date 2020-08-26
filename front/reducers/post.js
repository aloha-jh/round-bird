export const initialState={
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname:'정하',
        },
        content:'주말인데 비가오네요. 파전이 생각납니다.',
        //img:'http://localhost:3000/img/zeon.jpg'
        img:'https://storage.wcuisine.net/image/production/service/image/recipe/676/2b9ff3dd-3370-4103-8d0c-893ceeab1caf.jpg?size=1024x',
        createdAt: '2020-08-08',
        Comments:[]
    }],
    imagePaths:[], //이미지 미리보기 경로

    addPostErrorReason: false, //
    isAddingPost: false, //포스트업로드중
    postAdded: false,

    isAddingComment:false,
    addCommentErrorReason:'',
    CommentAdded:false,
}

// const dummyPost = {
//     id:2,
//     User:{
//         id:1,
//         nickname: '닐라', 
//     },
//     content:'애옹.',
//     Comments:[],
// }

const dummyComment = {
    id:1,
    User:{
        id:2,
        nickname: '탄이', 
    },
    createdAt: new Date(),
    content:'만나서반가워',
}


//포스트업로드
//메인포스트-내피드 로드하는 액션
//해시태그검색결과 로딩액션
//사용자가 어떤게시글썻는지로딩하는 액션
//이미지업로드하는액션
 
export const ADD_POST_REQUEST ='ADD_POST_REQUEST';
export const ADD_POST_SUCCESS ='ADD_POST_SUCCESS';
export const ADD_POST_FAILURE ='ADD_POST_FAILURE';

export const LOAD_MAIN_POSTS_REQUEST ='LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS ='LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE ='LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST ='LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS ='LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE ='LOAD_HASHTAG_POSTS_FAILURE';


export const LOAD_USER_POSTS_REQUEST ='LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS ='LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE ='LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST ='UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS ='UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE ='UPLOAD_IMAGES_FAILURE';

//이미지업로드한거취소(동기)
export const REMOVE_IMAGE ='REMOVE_IMAGE';
 
//포스트에라이크누르는액션
//포스트에 라이크취소액션

//게시글에댓글남기기
//게시글에댓글불러오기

//팔로우끊기액션
//포스트삭제액션

export const LIKE_POST_REQUEST ='LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS ='LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE ='LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST ='UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS ='UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE ='UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST ='ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS ='ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE ='ADD_COMMENT_FAILURE';

export const LOAD_COMMENT_REQUEST ='LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS ='LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE ='LOAD_COMMENT_FAILURE';

//리트윗
export const RE_POST_REQUEST ='RE_POST_REQUEST';
export const RE_POST_SUCCESS ='RE_POST_SUCCESS';
export const RE_POST_FAILURE ='RE_POST_FAILURE';

export const REMOVE_POST_REQUEST ='REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS ='REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE ='REMOVE_POST_FAILURE';

//업데이트-숙제?
export const UPDATE_POST_REQUEST ='UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS ='UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE ='UPDATE_POST_FAILURE';



 

const reducer = (state = initialState, action ) =>{
    switch(action.type){

        case ADD_POST_REQUEST:{
            return{
                ...state,
                isAddingPost: true,
                addPostErrorReason:'',
                postAdded: false,
            }
        } 
        case ADD_POST_SUCCESS:{
            return{
                ...state,
                isAddingPost: false,
                mainPosts:[action.data , ...state.mainPosts],
                postAdded: true,
            }
        } 
        case ADD_POST_FAILURE:{
            return{
                ...state,
                isAddingPost: false,
                addPostErrorReason:action.error,
            }
        } 

        
        case LOAD_MAIN_POSTS_REQUEST:{
            return{
                ...state,
                mainPosts:[]
            }
        } 
        case LOAD_MAIN_POSTS_SUCCESS:{
            return{
                ...state,
                mainPosts: action.data ,
            }
        } 
        case LOAD_MAIN_POSTS_FAILURE:{
            return{
                ...state, 
            }
        } 





        case ADD_COMMENT_REQUEST:{
            return{
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                CommentAdded: false,
            }
        } 
        case ADD_COMMENT_SUCCESS:{
            const postIndex = state.mainPosts.findIndex(v=>v.id === action.data.postId); //v.id가 뭘까?
            //state.mainPosts[postIndex].Comments.push(action.data.comment); 불변성때문에,
            const post = state.mainPosts[postIndex]; //해당하는포스트를복사
           // const Comments = [...post.Comments, action.data.comment ]; //기존댓글에추가
            const Comments = [...post.Comments, dummyComment ]; 
            const mainPosts = [...state.mainPosts]; //메인포스트를복사
            mainPosts[postIndex] = {...post, Comments };

            return{
                ...state,
                isAddingComment: false,
                mainPosts,
                CommentAdded: true,
            }
        } 
        case ADD_COMMENT_FAILURE:{
            return{
                ...state,
                isAddingComment: false,
                addCommentErrorReason:action.error,
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

