import React, { useEffect }  from 'react';   
import Link from 'next/link';
import PropTypes from 'prop-types';
//import { Menu,  Input, Row, Col, Card, Avatar} from 'antd';  
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';  
import { Paper, Tabs, Tab } from '@material-ui/core'; 
import { Card, Grid, Container } from '@material-ui/core';
 
   
import MenuIcon from '@material-ui/icons/Menu'; 
import UserProfile from './UserProfile';
import { useSelector , useDispatch } from 'react-redux'; 
import { LOAD_USER_REQUEST } from '../reducers/user';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,  
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    }
  }));
const AppLayout = ({ children }) =>{
    const { myInfo }= useSelector(state=> state.user); 
    const dispatch = useDispatch();

    // LoadUser (한번로그인했을때 쿠키로 서버에서정보가져오는 .내정보. 모든곳에서쓰니까  appLayout) 처음한번만쓸꺼니까 빈배열.
    useEffect(()=>{
       
        if(!myInfo){
            dispatch({
                type: LOAD_USER_REQUEST,
            });
        }
    },[]);

    const classes = useStyles();
  
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
        <>  
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> 
                    <Typography variant="h6" color="inherit">
                        <Link href="/"><a>RoundBird</a></Link>
                    </Typography> 
                </Toolbar>
            </AppBar>      
                  
            <Paper className={classes.root} style={{marginBottom:20}}>
                {myInfo ? 
                <Tabs value={value} onChange={handleChange}
                    indicatorColor="primary" textColor="primary" centered="true" 
                >
                    <Tab label={<Link href="/"><a>Home</a></Link>} />
                    <Tab label={<Link href="/myProfile"><a>myProfile</a></Link>} /> 
                </Tabs>
                :   
                <Tabs value={value} onChange={handleChange}
                    indicatorColor="primary" textColor="primary" centered="true" 
                > 
                    <Tab label={<Link href="/"><a>Home</a></Link>} />
                    <Tab label={<Link href="/login"><a>login</a></Link>} />
                    <Tab label={<Link href="/signUp"><a>sign up</a></Link>} />
                </Tabs>
                }
            </Paper> 

            <Container maxWidth="md">
            <Grid container spacing={3}  >
                {myInfo && 
                  <UserProfile />
                }
                <Grid item xs= {myInfo ? 9 : 12}>
                    <Card className={classes.root} style={{padding:20}}>  
                    {children}  
                    </Card>
                </Grid>
            </Grid>
            </Container>
        

               
        </>
    )
}

// AppLayout.prototype = {
//     children: PropTypes.node,
// }

export default AppLayout 