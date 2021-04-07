import React, { FC, useState } from "react";
import {
    TriangleConentLeft,
    TriangleConentRight,
} from "../../../StyledHelpers/Controls";
import BoxIcon from "../Icon/Boxing";
import { IconSize } from "../Icon/IconSize";
import { IconType } from "../Icon/IconType";
import { ContentS, ExpanderButtonS, ExpanderS, RoundS } from "./css";
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
            <ExpanderButtonS onClick={ChangeExpand} Expanded={State.Expanded}>
                <TriangleConentLeft>
                    <BoxIcon
                        IconType={props.LeftIcon}
                        IconSize={IconSize.Small}
                        Alt="Icon"
                    />
                    {props.Text}
                </TriangleConentLeft>
                <TriangleConentRight>
                    <RoundS Expanded={State.Expanded}>
                    <BoxIcon
                        // Expanded={State.Expanded}
                        IconType={IconType.arrow_down}
                        IconSize={IconSize.Small}
                        Alt="Icon"
                    />
                    </RoundS>
                </TriangleConentRight>
            </ExpanderButtonS>
            <ContentS Expanded={State.Expanded}>{props.children}</ContentS>
        </ExpanderS>
    );
};

export default DropDown;
