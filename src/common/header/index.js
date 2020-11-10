import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/Login/store';
import * as HeaderStyle from './style';

class Header extends Component {
  getListArea() {
    const {
      focused, list, page, totalPage, mouseIn,
      handleMouseEnter, handleMouseLeave, handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <HeaderStyle.SearchInfoItem key={newList[i]}>{newList[i]}</HeaderStyle.SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <HeaderStyle.SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <HeaderStyle.SearchInfoTitle>
            热门搜索
            <HeaderStyle.SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe851;</i>
              换一批
            </HeaderStyle.SearchInfoSwitch>
          </HeaderStyle.SearchInfoTitle>
          <HeaderStyle.SearchInfoList>
            {pageList}
          </HeaderStyle.SearchInfoList>
        </HeaderStyle.SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, list, login, logout, handleInputFocus, handleInputBlur } = this.props;

    return (
      <HeaderStyle.HeaderWrapper>
        <Link to='/'>
          <HeaderStyle.Logo/>
        </Link>
        <HeaderStyle.Nav>
          <HeaderStyle.NavItem className='left active'>首页</HeaderStyle.NavItem>
          <HeaderStyle.NavItem className='left'>下载APP</HeaderStyle.NavItem>
          {
            login ?
              <HeaderStyle.NavItem className='right' onClick={logout}>退出</HeaderStyle.NavItem> :
              <Link to='/login'>
                <HeaderStyle.NavItem className='right'>登录</HeaderStyle.NavItem>
              </Link>
          }
          <HeaderStyle.NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </HeaderStyle.NavItem>
          <HeaderStyle.SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <HeaderStyle.NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
            {this.getListArea()}
          </HeaderStyle.SearchWrapper>
        </HeaderStyle.Nav>
        <HeaderStyle.Addition>
          <Link to='/write'>
            <HeaderStyle.Button className='writing'>
              <i className="iconfont">&#xe6e5;</i>
              写文章
            </HeaderStyle.Button>
          </Link>
          <HeaderStyle.Button className='reg'>注册</HeaderStyle.Button>
        </HeaderStyle.Addition>
      </HeaderStyle.HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // (list.size === 0) && dispatch(actionCreators.getList());
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
