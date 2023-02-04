import {
  POST_DETAIL_FETCH,
  POST_DETAIL_SUCCESS,
  POST_DETAIL_FAILURE,
  POST_DETAIL_RESET,
  POST_SUBMIT_RATING_SUCCESS,
  POST_SUBMIT_RATING_FAILURE,
} from "../../constants/postsConstants";

const initialState = {
  post: null,
  error: null,
  success: false,
};

export const postDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DETAIL_FETCH:
      return {
        ...state,
        post: action.payload,
      };
    case POST_DETAIL_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case POST_SUBMIT_RATING_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case POST_DETAIL_FAILURE:
    case POST_SUBMIT_RATING_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case POST_DETAIL_RESET:
      return {
        ...state,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};
