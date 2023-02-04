import {
  POSTS_ERROR,
  LATEST_POSTS_DATA,
  CLEAR_POST_RESET,
  ALL_POSTS_DATA,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILURE,
  FETCH_BOOKMARK_SUCCESS,
  FETCH_BOOKMARK_FAILURE,
  POST_REPORT_BLOG_SUCCESS,
  POST_REPORT_BLOG_FAILURE,
} from "../../constants/postsConstants";

const initialState = {
  allPosts: {
    posts: [],
    totalItems: 0,
  },
  latestPosts: [],
  postDetail: null,
  bookmarks: {
    posts: [],
    totalItems: 0,
  },
  success: false,
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LATEST_POSTS_DATA:
      return {
        ...state,
        latestPosts: action.payload,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ALL_POSTS_DATA:
      return {
        ...state,
        allPosts: {
          posts: action.payload.posts,
          totalItems: action.payload.totalItems,
        },
      };
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case POST_CREATE_FAILURE:
    case POST_REPORT_BLOG_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    case POST_REPORT_BLOG_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case FETCH_BOOKMARK_SUCCESS:
      return {
        ...state,
        success: true,
        bookmarks: {
          posts: action.payload.bookmarks,
          totalItems: action.payload.totalItems,
        },
      };
    case FETCH_BOOKMARK_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload,
        bookmarks: {
          posts: [],
          totalItems: 0,
        },
      };
    case CLEAR_POST_RESET:
      return {
        ...state,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};
