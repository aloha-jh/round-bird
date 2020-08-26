import React ,{ useState ,useCallback , useEffect } from 'react';  
import { Avatar , Button, CssBaseline, TextField }from '@material-ui/core';
  
import Grid from '@material-ui/core/Grid'; 
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';  
import { useInput } from '../pages/signUp';
//import { useStyles } from '../pages/signUp';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = () =>{

    const classes = useStyles();

    const [id, onChangeId] = useInput();
    const [password, onChangePassword] = useInput();
    const dispatch = useDispatch();
    const { isLoggingIn , myInfo } = useSelector( state=> state.user );
 
  useEffect(()=>{
    if(myInfo && myInfo.id){
      Router.push('/');
    }
  },[myInfo && myInfo.id])


    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        //console.log({ id, password })
        dispatch({
            type:LOG_IN_REQUEST,
            data:{ userId:id,password }
        });
    },[ id, password]);

    
    return (
        <>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                로그인
                </Typography>
                <form onSubmit={onSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField name="user-id" id="user-id" label="아이디"
                            value={id} onChange={onChangeId}
                            variant="outlined" required fullWidth autoFocus 
                            />
                        </Grid> 
                        <Grid item xs={12}>
                            <TextField name="password" id="password" label="비밀번호"
                                value={password} onChange={onChangePassword}
                                variant="outlined" required fullWidth autoFocus 
                            />
                        </Grid> 
                    </Grid>
                    <Button
                    type="submit" 
                    fullWidth variant="contained" color="primary" className={classes.submit}
                    >
                        확인 {isLoggingIn && <CircularProgress />}
                    </Button>

                </form>
            </div> 
            </Container>
        </>
    );
}

export default Login;