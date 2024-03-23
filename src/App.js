import './App.css';
import Sidebar from "./component/Sidebar"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './component/page/Dashboard';
import Users from "./component/page/Users"
import AdminUser from './component/page/AdminUser';
import  Login  from "./component/login/Login"
import {LoginedIn,RequireAuth} from"./component/Routes"
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import initialData from './component/reducer/initialState';
import rootReducer from './component/reducer';
// import { Dashboard } from '@mui/icons-material';


const composeEnhancers = composeWithDevTools({});
// const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk, promise)));
const store = createStore(
  rootReducer,
  initialData,
  composeEnhancers(applyMiddleware(thunk, promise, logger))
);





function App() {



  return (
    <div className="App">
  
      <Provider store={store}>
      <Router>
      <Sidebar/>
        <Routes>
        <Route lexact path="Login" element={<LoginedIn><Login /></LoginedIn>} />
        
          <Route  exact path="/" element= {<RequireAuth><Dashboard/></RequireAuth>} ></Route>
          <Route   path="AdminUser" element= {<AdminUser/>} />
          <Route   path="Users" element= {<Users/>} />
        
         
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
