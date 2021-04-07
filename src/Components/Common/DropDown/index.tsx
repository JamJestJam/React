import React, { FC, useEffect, useState } from "react";
import {
    TriangleConentLeft,
    TriangleConentRight,
} from "../../../StyledHelpers/Controls";
import BoxIcon from "../Icon/Boxing";
import { IconSize } from "../Icon/IconSize";
import { IconType } from "../Icon/IconType";
import { ContentS, ExpanderButtonS, ExpanderS } from "./css";
import IDropDown from "./IDropDown";

const DropDown: FC<IDropDown> = (props) => {
    const [State, SetState] = useState({
        Expanded: false,
    });

    const ChangeExpand = () => {
        SetState({
            ...State,
            Expanded: !State.Expanded,
        });
    };

    return (
        <ExpanderS>
            <ExpanderButtonS onClick={ChangeExpand}>
                <TriangleConentLeft>
                    <BoxIcon
                        IconType={props.LeftIcon}
                        IconSize={IconSize.Small}
                        Alt="Icon"
                    />
                    {props.Text}
                </TriangleConentLeft>
                <TriangleConentRight>
                    <BoxIcon
                        IconType={IconType.arrow_down}
                        IconSize={IconSize.Small}
                        Alt="Icon"
                    />
                </TriangleConentRight>
            </ExpanderButtonS>
            <ContentS Expanded={State.Expanded}>{props.children}</ContentS>
        </ExpanderS>
    );
};

export default DropDown;
