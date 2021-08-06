import React from "react";
import _get from "lodash/get";

import useGetUserProfile from "hooks/useGetUserProfile";
import ProfileSettingsPage from "components/ProfileSettings";

function ProfileSettings() {
  const { user } = useGetUserProfile();

  return <ProfileSettingsPage profileUrl={_get(user[0], "profilePhoto", "")} />;
}

export default ProfileSettings;
