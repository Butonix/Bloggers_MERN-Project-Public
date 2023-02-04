import React, { useEffect } from "react";
import Layout from "../util/Layout";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  fetchUserProfileDetails,
  clearProfileStatus,
  resetUserPassword,
  updateProfileBio,
} from "../store/actions/profileActions";
import { useSelector, useDispatch } from "react-redux";
import {
  DisplaySocialLinks,
  InformationCard,
  RecentActivities,
  ResetPassword,
  UpdateBio,
} from "../components/Profile/";
import { setSocialLinks } from "../store/actions/profileActions";

// Maybe add another section at the bottom for managing your BLogs

const Profile = () => {
  const { userId } = useParams();
  const { user, posts, comments, success, error } = useSelector((state) => state.profile);
  const { user: authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isActiveUserProfile = user?._id === authUser?._id || false;

  const handleSetSocials = (newData) => {
    let data = {
      socials: {
        facebook: user.socials.facebook || "",
        twitter: user.socials.twitter || "",
        linkedin: user.socials.linkedin || "",
      },
    };
    data.socials[newData.name] = newData.url;
    dispatch(setSocialLinks(authUser?._id, data));
  };

  const handlePasswordReset = (passwords) => {
    dispatch(resetUserPassword(passwords));
  };

  const handleUpdateBio = (newBio) => {
    dispatch(updateProfileBio(newBio));
  };

  useEffect(() => {
    if (success) {
      toast.success("Success!", { theme: "colored" });
      dispatch(clearProfileStatus());
    }
    if (error) {
      toast.error(error, { theme: "colored" });
      dispatch(clearProfileStatus());
    }
    dispatch(fetchUserProfileDetails(userId));
  }, [dispatch, userId, success, error]);

  if (!user) {
    return <div className="md:w-3/4 w-[90%] mx-auto flex flex-col items-center mt-10 pb-10"></div>;
  }

  return (
    <div className="lg:w-3/4 w-[90%] mx-auto flex flex-col items-center mt-10 pb-10">
      <h1 className="text-3xl font-semibold mb-8 text-center dark:text-[#F7F7F7]">Profile</h1>
      <div className="w-full flex lg:gap-12 gap-4 lg:items-start lg:mt-12 mt-8 flex-col lg:flex-row">
        <div className="flex-1 flex flex-col items-center">
          <div className="profile-avatar">
            <img
              className="h-36 h-36 md:h-48 md:w-48 object-cover rounded-full border-2 border-gray-500"
              src={user.image}
              alt="avatar"
            />
          </div>
          <h1 className="my-8 text-3xl font-bold-semibold dark:text-[#F7F7F7]">{user.fullName}</h1>
          <DisplaySocialLinks
            socials={user.socials}
            authUser={authUser}
            isActiveUserProfile={isActiveUserProfile}
            handleSetSocials={handleSetSocials}
          />
          {authUser && isActiveUserProfile && (
            <>
              <h3 className="text-xl font-semibold my-4 dark:text-[#F7F7F7]">
                Reset your password
              </h3>
              <ResetPassword handlePasswordReset={handlePasswordReset} />
              <h3 className="text-xl font-semibold mb-4 mt-8 dark:text-[#F7F7F7]">
                Update your profile bio
              </h3>
              <UpdateBio handleUpdateBio={handleUpdateBio} currentBio={user?.shortBio} />
            </>
          )}
          {user?.shortBio && !isActiveUserProfile && (
            <div className="mt-5">
              <h3 className="text-xl font-semibold mb-4 mt-8 dark:text-[#F7F7F7]">
                {user?.fullName} bio
              </h3>
              <p className="leading-7 tracking-wide text-gray-600 dark:text-gray-300">
                {user?.shortBio}
              </p>
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-xl font-semibold mb-4 dark:text-[#F7F7F7]">
            Information about {user.fullName}
          </h1>
          <InformationCard user={user} numOfPosts={posts.length} numOfComments={comments.length} />
          <h1 className="text-xl font-semibold mb-4 mt-8 dark:text-[#F7F7F7]">Recent Activities</h1>
          <RecentActivities posts={posts} comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default Layout(Profile, "Profile");
