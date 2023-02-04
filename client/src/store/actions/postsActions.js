import * as api from "../../api";
import {
  POSTS_ERROR,
  LATEST_POSTS_DATA,
  ALL_POSTS_DATA,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILURE,
  FETCH_BOOKMARK_SUCCESS,
  FETCH_BOOKMARK_FAILURE,
  POST_REPORT_BLOG_SUCCESS,
  POST_REPORT_BLOG_FAILURE,
  CLEAR_POST_RESET,
} from "../../constants/postsConstants";

export const fetchLatestPosts = () => async (dispatch) => {
  try {
    const response = await api.getLatestPosts();
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: LATEST_POSTS_DATA,
        payload: data.posts,
      });
    } else {
      dispatch({
        type: POSTS_ERROR,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: "Service Error, please try again.",
    });
  }
};

export const fetchPosts = (search, category, page) => async (dispatch) => {
  try {
    const response = await api.getAllPosts(search, category, page);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ALL_POSTS_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: POSTS_ERROR,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: "Service Error, please try again.",
    });
  }
};

export const createPost = (postData, successCallback) => async (dispatch) => {
  try {
    const response = await api.postNewPost(postData);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_CREATE_SUCCESS,
        payload: data,
      });
      successCallback();
    } else {
      dispatch({
        type: POST_CREATE_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const fetchAllBookmarks = (currentPage) => async (dispatch) => {
  try {
    const response = await api.getAllBookmarks(currentPage);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: FETCH_BOOKMARK_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: FETCH_BOOKMARK_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: FETCH_BOOKMARK_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const reportBlog = (postId, reportType) => async (dispatch) => {
  try {
    const response = await api.postReportBlog(postId, reportType);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_REPORT_BLOG_SUCCESS,
      });
    } else {
      dispatch({
        type: POST_REPORT_BLOG_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_REPORT_BLOG_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const clearPostStatus = () => async (dispatch) => {
  dispatch({ type: CLEAR_POST_RESET });
};
