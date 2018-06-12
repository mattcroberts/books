import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../reducers";
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));
export default createStore(combineReducers(reducers), enhancer);
