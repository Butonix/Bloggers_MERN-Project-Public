import * as api from "../../api";
import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  POST_BOOKMARK_SUCCESS,
  POST_BOOKMARK_FAILURE,
  POST_BOOKMARK_RESET,
  CLEAR_ERR_AND_STATUS,
  AUTH_ERROR,
} from "../../constants/authActions";

const signUpAction = (formData) => async (dispatch) => {
  try {
    const response = await api.signUp(formData);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: SIGN_UP,
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Service Error, please try again.",
    });
  }
};

const signInAction = (formData, successCallback) => async (dispatch) => {
  try {
    const response = await api.signIn(formData);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: SIGN_IN,
        payload: data,
      });
      successCallback();
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Service Error, please try again.",
    });
  }
};

const signOutAction = (successCallback) => async (dispatch) => {
  try {
    const response = await api.signOut();
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: SIGN_OUT,
      });
      successCallback();
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: data.message,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
      payload: "Service Error, please try again.",
    });
  }
};

const getCurrentUser = () => async (dispatch) => {
  try {
    const response = await api.fetchCurrentUser();
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: SIGN_IN,
        payload: data,
        initialFetch: true,
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: "Error occured. Please try logging in.",
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Service Error, please try again.",
    });
  }
};

const bookmarkPost = (postId) => async (dispatch) => {
  try {
    const response = await api.getBookmarkPost(postId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: POST_BOOKMARK_SUCCESS,
        payload: data.user,
      });
    } else {
      dispatch({
        type: POST_BOOKMARK_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POST_BOOKMARK_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const clearAuthStatus = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERR_AND_STATUS });
};

const clearBookmarkStatus = () => async (dispatch) => {
  dispatch({ type: POST_BOOKMARK_RESET });
};

export {
  signUpAction,
  signInAction,
  getCurrentUser,
  clearAuthStatus,
  signOutAction,
  bookmarkPost,
  clearBookmarkStatus,
};
