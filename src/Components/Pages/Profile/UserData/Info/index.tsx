import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
import InputLabel from "Components/Common/Input/LabelInput";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//style
import * as CSS from "./css";
//actions
import setUser, { SetUser } from "Actions/User/setUser";
//inteface
import IState from "Reduces/IState";
import IUsersReducer from "Reduces/user/IUsersReducer";

const Info: FC = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector<IState, IUsersReducer>((GS) => ({
    ...GS.user,
  }));

  const [state, setState] = useState({
    open: false,
    name: "",
    street: "",
    city: "",
    phone: "",
    email: "",
  });

  const open = () => {
    setState({
      ...state,
      open: true,
    });
  };

  const close = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const save = () => {
    console.log(state);
    dispatch<SetUser>(
      setUser(state.name, state.street, state.city, state.email, state.phone)
    );
    close();
  };

  useEffect(() => {
    setState({
      ...state,
      name: user?.name || "",
      street: user?.address.street || "",
      city: user?.address.city || "",
      email: user?.email || "",
      phone: user?.phone || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <CSS.ContentS>
      <CSS.LeftS>
        {state.open ? (
          <>
            <InputLabel
              Label="Name"
              FontSize={"12"}
              Value={user?.name}
              Change={(event: React.ChangeEvent<HTMLInputElement>) => {
                setState({
                  ...state,
                  name: event.target.value,
                });
              }}
            />
            <InputLabel
              Label="Street"
              FontSize={"12"}
              Value={user?.address.street}
              Change={(event: React.ChangeEvent<HTMLInputElement>) => {
                setState({
                  ...state,
                  street: event.target.value,
                });
              }}
            />
            <InputLabel
              Label="City"
              FontSize={"12"}
              Value={user?.address.city}
              Change={(event: React.ChangeEvent<HTMLInputElement>) => {
                setState({
                  ...state,
                  city: event.target.value,
                });
              }}
            />
            <InputLabel Label="Status" FontSize={"12"} Value="Partner" />
          </>
        ) : (
          <>
            <CSS.BoldS>{user?.name}</CSS.BoldS>
            <CSS.BoldS>{user?.address.street}</CSS.BoldS>
            <div>{user?.address.city}</div>
            <div>Partner</div>
          </>
        )}
      </CSS.LeftS>
      <CSS.RightS>
        {state.open ? (
          <>
            <InputLabel
              Label="Email"
              FontSize={"12"}
              Value={user?.email}
              Change={(event: React.ChangeEvent<HTMLInputElement>) => {
                setState({
                  ...state,
                  email: event.target.value,
                });
              }}
            />
            <InputLabel
              Label="Phone"
              FontSize={"12"}
              Value={user?.phone}
              Change={(event: React.ChangeEvent<HTMLInputElement>) => {
                setState({
                  ...state,
                  phone: event.target.value,
                });
              }}
            />
          </>
        ) : (
          <>
            <div>{user?.email}</div>
            <div>{user?.phone}</div>
          </>
        )}
      </CSS.RightS>
      <CSS.EditS>
        {state.open ? (
          <>
            <div onClick={close}>
              <BoxIcon
                Alt=""
                IconType={IconType.edit}
                IconSize={IconSize.Small}
              />
            </div>
            <div onClick={save}>
              <BoxIcon
                Alt=""
                IconType={IconType.exit}
                IconSize={IconSize.Small}
              />
            </div>
          </>
        ) : (
          <>
            <div onClick={open}>
              <BoxIcon
                Alt=""
                IconType={IconType.edit}
                IconSize={IconSize.Small}
              />
            </div>
          </>
        )}
      </CSS.EditS>
    </CSS.ContentS>
  );
};

export default Info;
