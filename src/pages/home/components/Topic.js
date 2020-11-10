import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as HomeStyle from '../style';

class Topic extends PureComponent {
  render() {
    const { list } = this.props;

    return (
      <HomeStyle.TopicWrapper>
        {
          list.map((item) => {
            return (
              <HomeStyle.TopicItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="" className="topic-pic"/>
                {item.get('title')}
              </HomeStyle.TopicItem>
            )
          })
        }
      </HomeStyle.TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
};

const mapDispatchToProps = () => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
