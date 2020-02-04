import * as actionTypes from './actionTypes';

export const getSearchInputFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const getSearchInputBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
});
