import reducers from "./reducers";
import history from "./history";
import { routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
const middleware = routerMiddleware(history);

export default createStore(reducers, applyMiddleware(middleware, logger));
