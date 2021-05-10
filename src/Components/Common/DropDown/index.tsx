import React, { FC, useState, useEffect } from "react";
//data
import { IconSize } from "../Icon/IconSize";
import { IconType } from "../Icon/IconType";
import { Colors } from "StyledHelpers/Colors";
//components
import IDropDown from "./IDropDown";
import BoxIcon from "../Icon/Boxing";
//style
import * as ControlsHelp from "StyledHelpers/Controls";
import * as CSS from "./css";
import BoxImage from "../Image/Boxing";

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
        <CSS.ExpanderS onClick={StopProp}>
            <ControlsHelp.LinkS to="#">
                <CSS.ExpanderButtonS
                    onClick={ChangeExpand}
                    Expanded={State.Expanded}
                >
                    <ControlsHelp.TriangleConentLeft>
                        {props.ImageIconSwitch ? (
                            <BoxImage
                                ImageName={props.LeftImage || ""}
                                Background={Colors.Bg3}
                                Alt=""
                                BoxShadow={true}
                                Rounded={true}
                                MaxHeight={30}
                                MaxWidth={30}
                                Margin="5px"
                            />
                        ) : (
                            <BoxIcon
                                IconType={props.LeftIcon || 0}
                                IconSize={IconSize.Small}
                                Alt="Icon"
                            />
                        )}

                        {props.Text}
                    </ControlsHelp.TriangleConentLeft>
                    <ControlsHelp.TriangleConentRight>
                        <CSS.RoundS Expanded={State.Expanded}>
                            <BoxIcon
                                // Expanded={State.Expanded}
                                IconType={IconType.arrow_down}
                                IconSize={IconSize.Mini}
                                Alt="Icon"
                            />
                        </CSS.RoundS>
                    </ControlsHelp.TriangleConentRight>
                </CSS.ExpanderButtonS>
            </ControlsHelp.LinkS>
            <CSS.ContentS
                Expanded={State.Expanded}
                Height={props.Height || "100vh"}
            >
                {props.children}
            </CSS.ContentS>
        </CSS.ExpanderS>
    );
};

export default DropDown;
