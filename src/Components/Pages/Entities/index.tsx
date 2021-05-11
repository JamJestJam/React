import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";

const Entities: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon("Entities", "Entities", IconType.entities)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>Entities</>;
};

export default Entities;
