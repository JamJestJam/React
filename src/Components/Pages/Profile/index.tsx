import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import getPageInfoImage, {GetPageInfoImage} from "Actions/PageInfo/getPageInfoImage";
//interfaces
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";

const Profile: FC = () => {
    const dispatch = useDispatch();
    const { user } = useSelector<IState, IUsersReducer>((GS) => ({
        ...GS.user,
    }));

    useEffect(() => {
        dispatch<GetPageInfoImage>(getPageInfoImage("Profile", "Profile", user?.photo?.url || ""));
    });
    return <>Profile</>;
};

export default Profile;
