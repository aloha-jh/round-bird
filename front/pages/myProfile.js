import React from 'react'; 
import { TextField, Button, Grid, Avatar } from '@material-ui/core';
import { List, ListItem, ListItemAvatar,ListItemText } from '@material-ui/core';
import { ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core';
import NickNameEditForm from '../components/NickNameEditForm';
import DeleteIcon from '@material-ui/icons/Delete';
import {useSelector} from 'react-redux';
 
 

const MyProfile = () =>{
    const {myInfo}  = useSelector(state=>state.user);
    return(
        <> 
            <div>my page</div> 
            <Grid item md={12}>
                <NickNameEditForm />
            </Grid>

            <Grid item md={12} style={{marginTop:30}}>
                <Typography variant="h6">
                    팔로잉 목록
                </Typography>
                <List>  
                {myInfo.Followings.map((v, i)=>{
                    return(
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                {v[0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={v} 
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>    
                    );
                })} 
                </List> 
                <Button variant="outlined" color="primary" className="MuiButton-fullWidth">
                더보기
                </Button>
            </Grid>

            <Grid item md={12} style={{marginTop:30}}>
                <Typography variant="h6" >
                    팔로워 목록
                </Typography>
                <List>  
                {myInfo.Followers.map((v, i)=>{
                    return(
                        <ListItem key={'stop'+i}>
                            <ListItemAvatar>
                                <Avatar>
                                {v[0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={v} 
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>    
                    );
                })} 
                </List>  
                <Button variant="outlined" color="primary" className="MuiButton-fullWidth">
                더보기
                </Button>
            </Grid>
        </>
    )
}

export default MyProfile;