import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as HomeStyle from '../style';

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <HomeStyle.RecommendWrapper>
        {
          list.map((item) => {
            return <HomeStyle.RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
          })
        }
      </HomeStyle.RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
};

const mapDispatchToProps = () => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
