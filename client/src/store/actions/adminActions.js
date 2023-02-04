import * as api from "../../api";
import {
  ADMIN_FETCH_USERS_SUCCESS,
  ADMIN_FETCH_USERS_FAILURE,
  ADMIN_FETCH_POSTS_SUCCESS,
  ADMIN_FETCH_POSTS_FAILURE,
  ADMIN_FETCH_REPORTS_SUCCESS,
  ADMIN_FETCH_REPORTS_FAILURE,
  ADMIN_BANUNBAN_SUCCESS,
  ADMIN_BANUNBAN_FAILURE,
  ADMIN_PROMOTE_USER_SUCCESS,
  ADMIN_PROMOTE_USER_FAILURE,
  ADMIN_REMOVE_POST_SUCCESS,
  ADMIN_REMOVE_POST_FAILUIRE,
  ADMIN_SET_TRENDING_SUCCESS,
  ADMIN_SET_TRENDING_FAILUIRE,
  ADMIN_FETCH_REPORT_DETAILS_SUCCESS,
  ADMIN_FETCH_REPORT_DETAILS_FAILUIRE,
  ADMIN_CLOSE_REPORT_SUCCESS,
  ADMIN_CLOSE_REPORT_FAILUIRE,
  ADMIN_STATE_RESET,
} from "../../constants/adminConstats";

const fetchAllUsers = (currentPage, search) => async (dispatch) => {
  try {
    const response = await api.getAllUsers(currentPage, search);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_FETCH_USERS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ADMIN_FETCH_USERS_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_USERS_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const fetchAllBlogs = (currentPage, search) => async (dispatch) => {
  try {
    const response = await api.getAllBlogs(currentPage, search);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_FETCH_POSTS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ADMIN_FETCH_POSTS_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_POSTS_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const banUnbanUser = (userId) => async (dispatch) => {
  try {
    const response = await api.getBanUnbanUser(userId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_BANUNBAN_SUCCESS,
      });
    } else {
      dispatch({
        type: ADMIN_BANUNBAN_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_BANUNBAN_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const promoteUser = (userId) => async (dispatch) => {
  try {
    const response = await api.getPromoteUser(userId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_PROMOTE_USER_SUCCESS,
      });
    } else {
      dispatch({
        type: ADMIN_PROMOTE_USER_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_PROMOTE_USER_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const removePostAdmin = (postId) => async (dispatch) => {
  try {
    const response = await api.deleteRemovePost(postId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_REMOVE_POST_SUCCESS,
      });
    } else {
      dispatch({
        type: ADMIN_REMOVE_POST_FAILUIRE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_REMOVE_POST_FAILUIRE,
      payload: "Service Error, please try again.",
    });
  }
};

const setPostTrending = (postId) => async (dispatch) => {
  try {
    const response = await api.getSetTrending(postId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_SET_TRENDING_SUCCESS,
      });
    } else {
      dispatch({
        type: ADMIN_SET_TRENDING_FAILUIRE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_SET_TRENDING_FAILUIRE,
      payload: "Service Error, please try again.",
    });
  }
};

const fetchAllReports = () => async (dispatch) => {
  try {
    const response = await api.getAllReports();
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_FETCH_REPORTS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ADMIN_FETCH_REPORTS_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_REPORTS_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const fetchReportDetails = (reportId) => async (dispatch) => {
  try {
    const response = await api.getReportDetail(reportId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_FETCH_REPORT_DETAILS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ADMIN_FETCH_REPORT_DETAILS_FAILUIRE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_REPORT_DETAILS_FAILUIRE,
      payload: "Service Error, please try again.",
    });
  }
};

const closeReport = (reportId) => async (dispatch) => {
  try {
    const response = await api.getCloseReport(reportId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_CLOSE_REPORT_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ADMIN_CLOSE_REPORT_FAILUIRE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_CLOSE_REPORT_FAILUIRE,
      payload: "Service Error, please try again.",
    });
  }
};

const clearAdminState = () => async (dispatch) => {
  dispatch({ type: ADMIN_STATE_RESET });
};

export {
  fetchAllUsers,
  fetchAllBlogs,
  clearAdminState,
  banUnbanUser,
  promoteUser,
  removePostAdmin,
  setPostTrending,
  fetchAllReports,
  fetchReportDetails,
  closeReport,
};
