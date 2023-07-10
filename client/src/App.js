// import Banner from './Components/Home/Banner';

import React from 'react';
import './App.css';
import { Box } from '@material-ui/core';
// import component
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import DetailView from './Components/Home/Post/DetailView';
import UpdateView from './Components/Home/Post/UpdateView';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import CreateView from './Components/Home/Post/CreateView';

function App() {
  return (
    
    
    <Router>
    <Box style={{marginTop:122}}>
 <Navbar/>
    <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/detail">
            <DetailView/>
          </Route>
          <Route exact path="/create">
            <CreateView/>
          </Route>
          <Route exact path="/update">
            <UpdateView/>
          </Route>
        </Switch>
    </Box>
    </Router>
  
  );
}

export default App;
