import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from 'react-redux'
import store from './store/store'
import Header from './components/commons/Header'
import Home from './components/home/Home'
import Search from './components/search/Search';
import My from './components/my/My';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route path={'/Home'} component={Home}/>
          <Route path={'/Search'} component={Search}/>
          <Route path={'/My'} component={My}/>
          <Route component={Home}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
