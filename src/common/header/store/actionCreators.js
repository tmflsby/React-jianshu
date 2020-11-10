import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

/**NavSearch 搜索框聚焦*/
export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

/**NavSearch 搜索框失焦*/
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

/**SearchInfoSwitch(换一批) 改变页码*/
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});

/**SearchInfoList 改变热门搜索列表*/
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

/**获取热门搜索列表*/
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data;
      const action = changeList(data.data);
      dispatch(action);
    }).catch(error => {
      console.log(error);
    })
  }
};

/**SearchInfo 鼠标进入*/
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

/**SearchInfo 鼠标离开*/
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});
