import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import * as HomeStyle from './style';
import * as actionCreators from './store/actionCreators';

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  render() {
    return (
      <HomeStyle.HomeWrapper>
        <HomeStyle.HomeLeft>
          <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic/>
          <List/>
        </HomeStyle.HomeLeft>
        <HomeStyle.HomeRight>
          <Recommend/>
          <Writer/>
        </HomeStyle.HomeRight>
        {
          this.props.showScroll ? <HomeStyle.BackTop onClick={this.handleScrollTop}>回到顶部</HomeStyle.BackTop> : null
        }
      </HomeStyle.HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
