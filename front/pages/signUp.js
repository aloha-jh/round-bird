import React ,{ useState ,useCallback, useEffect } from 'react';  
import { Avatar, Button, CssBaseline,TextField, FormControlLabel, Checkbox, Grid }from '@material-ui/core';
import { Box, Typography, CircularProgress, Container, RadioGroup, Radio } from '@material-ui/core';

import {useDispatch , useSelector } from 'react-redux'; 
import { SING_UP_REQUEST } from '../reducers/user';
import Router from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const useStyles = makeStyles((theme) => ({
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


export const useInput = (initValue = null) =>{
  const[ value, setter] = useState(initValue);
  const handler = useCallback((e) =>{
      setter(e.target.value); 
  },[]);
  return [value, handler];
} 

export default function SignUp() {
  const classes = useStyles();
 
  const dispatch = useDispatch();
  const { isSigningUp, isSignUp } = useSelector( state=> state.user);

  const [id, onChangeId] = useInput('');
  const [nickName, onChangeNickName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [gender, onChangeGender] = useInput('male');
  const [birth, onChangeBirth] = useInput(''); 
   
  const[term, setTerm] = useState(false); 
  const[passwordError, setPasswordError ] = useState(false);
  const[termError, setTermError ] = useState(false);

  useEffect(()=>{
    if(isSignUp && isSignUp ){
      alert('회원가입성공. 로그인 페이지로 이동합니다');
      Router.push('/login');
    }
  },[isSignUp === true])

  const onSubmit = useCallback((e)=>{
      e.preventDefault();
      if( password !== passwordConfirm ){
          return setPasswordError(true);
      }
      if(!term){
          return setTermError(true);
      }
      console.log({ id, nickName, password, passwordConfirm, gender, birth, term})

      dispatch({
        type:SING_UP_REQUEST,
        data:{userId: id, nickname: nickName, password, gender, birth} 
      });

  },[id,nickName, password, passwordConfirm, term, gender]);

  const onChangePasswordConfirm = useCallback((e)=>{
      setPasswordError(e.target.value !== password )
      setPasswordConfirm(e.target.value);
  },[password]); 
  const onChangeTerm = useCallback((e)=>{
      setTermError(false);
      setTerm(e.target.checked ); 
  },[]); 
 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
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
              <TextField name="nickName" id="nickName" label="닉네임"
                value={nickName} onChange={onChangeNickName}
                variant="outlined" required fullWidth autoFocus 
              />
            </Grid> 
            <Grid item xs={12}>
              <TextField id="birth" type="date" label="생일"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={birth} onChange={onChangeBirth} 
                variant="outlined" required fullWidth autoFocus 
              />
            </Grid> 
            <Grid item xs={12}>
              <TextField name="password" id="password" label="비밀번호"
                value={password} onChange={onChangePassword}
                variant="outlined" required fullWidth autoFocus 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField name="passwordConfirm" id="passwordConfirm" label="비밀번호확인"
                value={passwordConfirm} onChange={onChangePasswordConfirm} 
                variant="outlined" required fullWidth autoFocus 
              /> 
              {passwordError && <div className="agree">비밀번호가 일치하지 않습니다</div>  }
            </Grid>

            <Grid item xs={12}></Grid>
              <RadioGroup aria-label="gender" name="gender" value={gender} onChange={onChangeGender} >
                <FormControlLabel value="male" control={<Radio />}   label="남" /> 
                <FormControlLabel value="female" control={<Radio />} label="여" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" checked={term} onChange={onChangeTerm}  color="primary" />}
                label="개인정보처리방침에 동의합니다."
              />
              {termError && <div className="agree">약관에 동의하셔야 합니다</div>}
            </Grid> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              가입하기 {isSigningUp && <CircularProgress />}
            </Button>
           
        </form>
      </div> 
    </Container>
  );
}