import * as api from "../../api";
import {
  POST_DETAIL_FETCH,
  POST_DETAIL_SUCCESS,
  POST_DETAIL_FAILURE,
  POST_DETAIL_RESET,
  POST_SUBMIT_RATING_SUCCESS,
  POST_SUBMIT_RATING_FAILURE,
} from "../../constants/postsConstants";

export const fetchPostDetails = (postId, successCallback) => async (dispatch) => {
  try {
    const response = await api.postDetail(postId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_DETAIL_FETCH,
        payload: data.post,
      });
      successCallback();
    } else {
      dispatch({
        type: POST_DETAIL_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_DETAIL_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const createNewComment = (postId, newComment) => async (dispatch) => {
  try {
    const response = await api.postNewComment(postId, newComment);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_DETAIL_SUCCESS,
      });
    } else {
      dispatch({
        type: POST_DETAIL_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_DETAIL_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const editComment = (commentId, newComment) => async (dispatch) => {
  try {
    const response = await api.postEditComment(commentId, newComment);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_DETAIL_SUCCESS,
      });
    } else {
      dispatch({
        type: POST_DETAIL_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_DETAIL_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    const response = await api.deleteComment(postId, commentId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_DETAIL_SUCCESS,
      });
    } else {
      dispatch({
        type: POST_DETAIL_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_DETAIL_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const likeComment = (commentId) => async (dispatch) => {
  try {
    const response = await api.getLikeComment(commentId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_DETAIL_SUCCESS,
      });
    } else {
      dispatch({
        type: POST_DETAIL_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_DETAIL_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const submitRating = (postId, rating) => async (dispatch) => {
  try {
    const response = await api.getSubmitReting(postId, rating);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_SUBMIT_RATING_SUCCESS,
      });
    } else {
      dispatch({
        type: POST_SUBMIT_RATING_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_SUBMIT_RATING_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const clearPostDetailStatus = () => async (dispatch) => {
  dispatch({ type: POST_DETAIL_RESET });
};
