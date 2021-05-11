import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Privacy: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon("Privacy", "Privacy", IconType.privacy)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Privacy</>;
};

export default Privacy;
