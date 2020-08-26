const express =require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./models'); 
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');

const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

app.use(morgan('dev'));
app.use('/', express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true, //js에서 쿠키접근못함.
        secure:false, //https T
    },
    name:'choco',
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
 
app.listen( 3003, ()=>{
    console.log(`server is running :3003`);
});