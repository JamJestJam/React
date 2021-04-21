import React, { FC } from "react";
//data
import { IconType } from "../Common/Icon/IconType";
//components
import BaseView from "../BaseView";

const Profile: FC = () => {
    return <BaseView SiteName="Profile" SiteIcon={IconType.bell} >123</BaseView>;
};

export default Profile;
