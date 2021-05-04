import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
//actions
import getPageInfo from "Actions/PageInfo/getPageInfo";
//data
import { IconType } from "Components/Common/Icon/IconType";
//types
type GetPageInfo = ReturnType<typeof getPageInfo>;
const Privacy: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPageInfo>(
            getPageInfo("Privacy", "Privacy", IconType.privacy)
        );
    });
    return <>Privacy</>;
};

export default Privacy;
