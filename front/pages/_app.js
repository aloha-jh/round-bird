import React from 'react'; 
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import { createStore , compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const RoundBird = ({ Component, store }) =>{
    return (
        <Provider store={store}> 
        <Head>
            <title>RoundBird</title>
           {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.5.2/antd.compact.min.css"/> */} 
            <link rel="stylesheet" href="../index.css" />  
            <link rel="stylesheet" href="../reset.css" />  
        </Head>
        <AppLayout>
            <Component />
        </AppLayout>
        </Provider>
    );
}

RoundBird.propTypes = {
    component: PropTypes.elementType.isRequired, 
    store: PropTypes.object,
}

const configureStore = (initialState, options)=>{
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const enhancer = process.env_NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares),)
    : compose(applyMiddleware(...middlewares),
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) =>f,
    );
    const store = createStore(reducer, initialState, enhancer );

    sagaMiddleware.run(rootSaga); //
    return (store);
};
export default withRedux(configureStore)(RoundBird);