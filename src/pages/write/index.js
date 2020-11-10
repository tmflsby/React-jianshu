import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;

    if (loginStatus) {
      return (
        <div>写文章页面——开发中</div>
      )
    } else {
      return <Redirect to='/login'/>
    }

  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
};

const mapDispatchToProps = () => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Write);
