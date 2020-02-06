import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style';
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
                <ListItem>
                  <img src={item.get('imgUrl')} alt="" className="list-pic"/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多内容</LoadMore>
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
