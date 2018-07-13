import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default (initialState = {}) => {


    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: compose;

    const enhancer = composeEnhancers( applyMiddleware( thunk ));

    const store = createStore(rootReducer, initialState, enhancer);
    
    return store;
};

