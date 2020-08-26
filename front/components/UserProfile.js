import React  ,{useCallback} from 'react';    

import { Card, CardHeader, Avatar, Grid, Button } from '@material-ui/core'; 
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'; 
 
import FilterIcon from '@material-ui/icons/Filter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HowToRegIcon from '@material-ui/icons/HowToReg';   

import { useSelector, useDispatch } from 'react-redux';
import  { LOG_OUT_REQUEST } from '../reducers/user';


const UserProfile = () => {
    const { myInfo } = useSelector(state=>state.user);
    console.log(myInfo);
    const dispatch = useDispatch();
    const onLogout = useCallback(()=>{
        dispatch({
            type: LOG_OUT_REQUEST,
            // data:{
            //     id, password,
            // }
        });
    },[])

    return( 
        <Grid item xs={3}> 
            <Card >
                <CardHeader
                    avatar={
                    // <Avatar aria-label="recipe" className={classes.avatar}>
                    <Avatar>
                        {myInfo.nickname[0]}
                    </Avatar>
                    } 
                    title={myInfo.nickname } 
                   
                /> 
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon><FilterIcon /></ListItemIcon>
                        <ListItemText primary={'게시글 '+ myInfo.Posts.length} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><HowToRegIcon /></ListItemIcon>
                        <ListItemText primary={'팔로잉 '+myInfo.Followings.length} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                        <ListItemText primary={'팔로워 '+myInfo.Followers.length} />
                    </ListItem>
                    <ListItem>
                        <Button color="primary" onClick={onLogout}>로그아웃</Button>
                    </ListItem>
                </List>
            </Card>
        </Grid> 
        
    )
}
export default UserProfile;