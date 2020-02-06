import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './style';
import IconfontGlobalStyle from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/Login';
import Write from './pages/write';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <IconfontGlobalStyle />
        <GlobalStyle />
        <Provider store={store}>
          <Router>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
