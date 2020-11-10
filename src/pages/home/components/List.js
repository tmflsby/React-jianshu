import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as HomeStyle from '../style';
import * as actionCreators from '../store/actionCreators';

class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props;

    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link to={'/detail/' + item.get('id')} key={index}>
                <HomeStyle.ListItem>
                  <img src={item.get('imgUrl')} alt="" className="list-pic"/>
                  <HomeStyle.ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </HomeStyle.ListInfo>
                </HomeStyle.ListItem>
              </Link>
            )
          })
        }
        <HomeStyle.LoadMore onClick={() => getMoreList(page)}>更多内容</HomeStyle.LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreListAction(page));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
