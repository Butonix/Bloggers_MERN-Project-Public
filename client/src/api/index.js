import { SERVER_URL } from "../constants/routes";

export const signUp = async (formData) => {
  return await fetch(`${SERVER_URL}/auth/sign-up`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export const signIn = async (formData) => {
  return await fetch(`${SERVER_URL}/auth/sign-in`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export const fetchCurrentUser = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return null;

  return await fetch(`${SERVER_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });
};

export const signOut = async () => {
  return await fetch(`${SERVER_URL}/auth/sign-out`, {
    method: "GET",
    credentials: "include",
  });
};

export const getLatestPosts = async () => {
  return await fetch(`${SERVER_URL}/posts/latest-posts`, {
    method: "GET",
    credentials: "include",
  });
};

export const getAllPosts = async (search, category, page) => {
  return await fetch(
    `${SERVER_URL}/posts/browse-posts?page=${page}&category=${category}&search=${search}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
};

export const postNewPost = async (postData) => {
  return await fetch(`${SERVER_URL}/posts/create-new`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
};

export const postDetail = async (postId) => {
  return await fetch(`${SERVER_URL}/posts/detail/${postId}`, {
    method: "GET",
    credentials: "include",
  });
};

// comments

export const postNewComment = async (postId, newComment) => {
  return await fetch(`${SERVER_URL}/posts/detail/${postId}/new-comment`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newComment }),
  });
};

export const postEditComment = async (commentId, newComment) => {
  return await fetch(`${SERVER_URL}/posts/detail/edit-comment/${commentId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newComment }),
  });
};

export const deleteComment = async (postId, commentId) => {
  return await fetch(`${SERVER_URL}/posts/detail/${postId}/remove-comment/${commentId}`, {
    method: "DELETE",
    credentials: "include",
  });
};

export const getLikeComment = async (commentId) => {
  return await fetch(`${SERVER_URL}/posts/detail/like-comment/${commentId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getBookmarkPost = async (postId) => {
  return await fetch(`${SERVER_URL}/posts/bookmark/${postId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getAllBookmarks = async (currentPage) => {
  return await fetch(`${SERVER_URL}/posts/my-bookmarks?page=${currentPage}`, {
    method: "GET",
    credentials: "include",
  });
};

//user

export const getUserProfileDetails = async (userId) => {
  return await fetch(`${SERVER_URL}/user-detail/${userId}`, {
    method: "GET",
    credentials: "include",
  });
};

// { currentPassword, newPassword }
export const postResetPassword = async (data) => {
  return await fetch(`${SERVER_URL}/user-detail/reset-password`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

// { socials: { facebook: "asdas", twitter: "adas", linkedin: "asdasas" } }
export const postSetSocial = async (userId, data) => {
  return await fetch(`${SERVER_URL}/user-detail/set-social/${userId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const postUpdateBio = async (newBio) => {
  return await fetch(`${SERVER_URL}/user-detail/set-short-bio`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bio: newBio,
    }),
  });
};

export const getSubmitReting = async (postId, rating) => {
  return await fetch(`${SERVER_URL}/posts/detail/${postId}/update-ratings/?rating=${rating}`, {
    method: "GET",
    credentials: "include",
  });
};

export const postReportBlog = async (postId, reportType) => {
  return await fetch(`${SERVER_URL}/posts/detail/${postId}/report-post`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reportType,
    }),
  });
};

// admin

export const getAllUsers = async (currentPage, search) => {
  return await fetch(`${SERVER_URL}/manage/get-all-users?page=${currentPage}&search=${search}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getAllBlogs = async (currentPage, search) => {
  return await fetch(`${SERVER_URL}/manage/get-all-blogs?page=${currentPage}&search=${search}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getAllReports = async () => {
  return await fetch(`${SERVER_URL}/manage/get-all-reports`, {
    method: "GET",
    credentials: "include",
  });
};

export const getBanUnbanUser = async (userId) => {
  return await fetch(`${SERVER_URL}/manage/ban-unban?userId=${userId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getPromoteUser = async (userId) => {
  return await fetch(`${SERVER_URL}/manage/promote-user?userId=${userId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const deleteRemovePost = async (postId) => {
  return await fetch(`${SERVER_URL}/manage/remove-post?postId=${postId}`, {
    method: "DELETE",
    credentials: "include",
  });
};

export const getSetTrending = async (postId) => {
  return await fetch(`${SERVER_URL}/manage/set-trending?postId=${postId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getReportDetail = async (reportId) => {
  return await fetch(`${SERVER_URL}/manage/get-report-detail?reportId=${reportId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const getCloseReport = async (reportId) => {
  return await fetch(`${SERVER_URL}/manage/close-report?reportId=${reportId}`, {
    method: "GET",
    credentials: "include",
  });
};

export const deleteRemovePostAndReport = async (postId, reportId) => {
  return await fetch(`${SERVER_URL}/manage/remove-post?postId=${postId}&reportId=${reportId}`, {
    method: "DELETE",
    credentials: "include",
  });
};
