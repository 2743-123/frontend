import './App.css';
import Sidebar from "./component/Sidebar"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './component/page/Dashboard';
import Users from "./component/page/Users"
import AdminUser from './component/page/AdminUser';
import  Login  from "./component/login/Login"
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { Dashboard } from '@mui/icons-material';


function App() {
  // const composeEnhancers = composeWithDevTools({});
  // const store = createStore(
  //   rootReducer,
  //   initialState,
  //   composeEnhancers(applyMiddleware(thunk, promise, logger))
  // );


  return (
    <div className="App">
  
      
      <Router>
      <Sidebar/>
        <Routes>
        <Route lexact path="Login" element={<Login />} />
          <Route  exact path="/" element= {<Dashboard/>} />
          <Route   path="AdminUser" element= {<AdminUser/>} />
          <Route   path="Users" element= {<Users/>} />
        
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
