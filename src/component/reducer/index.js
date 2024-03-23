import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import managementreducer from "./managementreducer";

const rootReducer = combineReducers({
  managementreducer,
  routing: routerReducer,
});

export default rootReducer;
