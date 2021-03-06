import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Publications: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon("Publications", "Publications", IconType.publications)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Publications</>;
};

export default Publications;
