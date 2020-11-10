import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeDataAction = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data;
      dispatch(changeHomeDataAction(result));
    }).catch(error => {
      console.log(error);
    })
  }
};

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list,
  nextPage
});

export const getMoreListAction = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    }).catch(error => {
      console.log(error);
    })
  }
};

export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show
});
