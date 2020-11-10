import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

/**初始化默认 state*/
const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
}
