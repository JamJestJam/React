import React, { FC, useState, useEffect } from "react";
//data
import { IconSize } from "../Icon/IconSize";
import { IconType } from "../Icon/IconType";
//components
import IDropDown from "./IDropDown";
import BoxIcon from "../Icon/Boxing";
//css
import * as ControlsHelp from "../../../StyledHelpers/Controls";
import { ContentS, ExpanderButtonS, ExpanderS, RoundS } from "./css";

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

    const Close = () => {
        SetState({
            ...State,
            Expanded: false,
        });
    };

    const StopProp = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    useEffect(() => {
        document.addEventListener("click", Close);

        return () => {
            document.removeEventListener("click", Close);
        };
    });

    return (
        <ExpanderS onClick={StopProp}>
            <ControlsHelp.LinkS to="#">
                <ExpanderButtonS
                    onClick={ChangeExpand}
                    Expanded={State.Expanded}
                >
                    <ControlsHelp.TriangleConentLeft>
                        <BoxIcon
                            IconType={props.LeftIcon}
                            IconSize={IconSize.Small}
                            Alt="Icon"
                        />
                        {props.Text}
                    </ControlsHelp.TriangleConentLeft>
                    <ControlsHelp.TriangleConentRight>
                        <RoundS Expanded={State.Expanded}>
                            <BoxIcon
                                // Expanded={State.Expanded}
                                IconType={IconType.arrow_down}
                                IconSize={IconSize.Mini}
                                Alt="Icon"
                            />
                        </RoundS>
                    </ControlsHelp.TriangleConentRight>
                </ExpanderButtonS>
            </ControlsHelp.LinkS>
            <ContentS
                Expanded={State.Expanded}
                Height={props.Height || "100vh"}
            >
                {props.children}
            </ContentS>
        </ExpanderS>
    );
};

export default DropDown;
