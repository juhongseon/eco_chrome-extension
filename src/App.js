import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './store/store'
import Header from './components/commons/Header'
import Home from './components/home/Home'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path={'/'} component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
