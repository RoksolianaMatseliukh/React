import {applyMiddleware, compose, createStore} from "redux";

import rootReducer from "../reducers/rootReducer";

const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const loggerMiddleware = store => next => action => {
    const result = next(action);
    console.log('middleware', result);
    console.log(store.getState());
    return result;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware)));
