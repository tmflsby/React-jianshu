import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as DetailStyle from './style';
import * as actionCreators from './store/actionCreators';

class Detial extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailStyle.DetailWrapper>
        <DetailStyle.Header>{ title }</DetailStyle.Header>
        <DetailStyle.Content dangerouslySetInnerHTML={{__html: content}}/>
      </DetailStyle.DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetailInfo(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detial));
