import { FC } from "react";
import { useSelector } from "react-redux";
//style
import * as CSS from "./css";
//interface
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";

const DataBox: FC = () => {
  const { user } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));

  return (
    <CSS.ContentS>
      {console.log(user)}
      sie ma 
    </CSS.ContentS>
  );
};

export default DataBox;
