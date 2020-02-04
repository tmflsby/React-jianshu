import React, { Component, Fragment } from 'react';
import GlobalStyle from './style'
import IconfontGlobalStyle from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <IconfontGlobalStyle />
        <GlobalStyle />
        <Header />
      </Fragment>
    );
  }
}

export default App;
