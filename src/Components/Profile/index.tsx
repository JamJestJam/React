import React, { FC } from "react";
import BaseView from "../BaseView";
import { IconType } from "../Common/Icon/IconType";

const Profile: FC = () => {
    return <BaseView SiteName="Profile" SiteIcon={IconType.bell} >123</BaseView>;
};

export default Profile;
