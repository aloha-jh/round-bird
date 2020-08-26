import React from 'react';  
  
import { TextField ,Button } from '@material-ui/core';


const NickNameEditForm = () =>{
    return(
        <form style={{marginTop:30}}>
            <TextField id="nickname" label="닉네임" />
            <Button variant="contained" color="primary" disableElevation style={{marginTop:10}}>
            수정</Button>
        </form>
    )
}

export default NickNameEditForm;

             