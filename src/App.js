import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style';
import IconfontGlobalStyle from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <IconfontGlobalStyle />
        <GlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
