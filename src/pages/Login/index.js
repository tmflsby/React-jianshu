import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import * as actionCreators from './store/actionCreators';

class Login extends PureComponent {
  render() {
    const { loginStatus, login } = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => {this.account = input}}></Input>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}></Input>
            <Button onClick={() => login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }

  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login(accountElement, passwordElement) {
      dispatch(actionCreators.login(accountElement.value, passwordElement.value));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
