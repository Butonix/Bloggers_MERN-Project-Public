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

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  success: false,
  bookmarkSuccess: false,
  bookmarkError: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        error: null,
        success: action.initialFetch ? false : true,
      };
    case SIGN_UP:
      return {
        ...initialState,
        success: true,
      };
    case SIGN_OUT:
      localStorage.removeItem("user");
      return {
        ...initialState,
      };
    case POST_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarkSuccess: true,
        user: action.payload,
      };
    case POST_BOOKMARK_FAILURE:
      return {
        ...state,
        bookmarkSuccess: false,
        bookmarkError: action.payload,
      };
    case POST_BOOKMARK_RESET:
      return {
        ...state,
        bookmarkSuccess: false,
        bookmarkError: null,
      };
    case AUTH_ERROR:
      localStorage.removeItem("user");
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERR_AND_STATUS:
      return {
        ...state,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};
