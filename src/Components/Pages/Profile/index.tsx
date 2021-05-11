import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import getPageInfoImage, {
  GetPageInfoImage,
} from "Actions/PageInfo/getPageInfoImage";
//components
import UserData from "./UserData";
import PanelInformations from "./PanelInformations";
import Proposals from "./Proposals";
import InternalRewiews from "./InternalRewiews";
import AmountFees from "./AmountFees";
import DataBox from "./DataBox";
//interfaces
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";

const Profile: FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));

  useEffect(() => {
    dispatch<GetPageInfoImage>(
      getPageInfoImage("Profile", "Profile", user?.photo?.url || "")
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <UserData />
      <DataBox />
      <PanelInformations />
      <Proposals />
      <InternalRewiews />
      <AmountFees />
    </>
  );
};

export default Profile;
