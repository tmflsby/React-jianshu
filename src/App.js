import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './style';
import IconfontGlobalStyle from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
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
            <Route path='/detail' exact component={Detail}></Route>
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
