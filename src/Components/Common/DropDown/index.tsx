import React, { FC, useState, useEffect } from "react";
//data
import { IconSize } from "../Icon/IconSize";
import { IconType } from "../Icon/IconType";
import { colors } from "StyledHelpers/Colors";
//components
import IDropDown from "./IDropDown";
import BoxIcon from "../Icon/Boxing";
//style
import * as ControlsHelp from "StyledHelpers/Controls";
import * as CSS from "./css";
import BoxImage from "../Image/Boxing";

const DropDown: FC<IDropDown> = (props) => {
  const [state, setState] = useState({
    expanded: false,
  });

  const changeExpand = () => {
    setState({
      ...state,
      expanded: !state.expanded,
    });
  };

  const close = () => {
    setState({
      ...state,
      expanded: false,
    });
  };

  const stopProp = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener("click", close);

    return () => {
      document.removeEventListener("click", close);
    };
  });

  return (
    <CSS.ExpanderS onClick={stopProp}>
      <ControlsHelp.LinkS to="#">
        <CSS.ExpanderButtonS onClick={changeExpand} expanded={state.expanded}>
          <ControlsHelp.TriangleConentLeft>
            {props.imageIconSwitch ? (
              <BoxImage
                imageName={props.leftImage || ""}
                background={colors.Bg3}
                alt=""
                boxShadow={true}
                rounded={true}
                maxHeight={30}
                maxWidth={30}
                margin="5px"
              />
            ) : (
              <BoxIcon
                iconType={props.leftIcon || 0}
                iconSize={IconSize.small}
                alt="Icon"
              />
            )}

            {props.Text}
          </ControlsHelp.TriangleConentLeft>
          <ControlsHelp.TriangleConentRight>
            <CSS.RoundS expanded={state.expanded}>
              <BoxIcon
                // Expanded={State.Expanded}
                iconType={IconType.arrow_down}
                iconSize={IconSize.mini}
                alt="Icon"
              />
            </CSS.RoundS>
          </ControlsHelp.TriangleConentRight>
        </CSS.ExpanderButtonS>
      </ControlsHelp.LinkS>
      <CSS.ContentS expanded={state.expanded} height={props.height || "100vh"}>
        {props.children}
      </CSS.ContentS>
    </CSS.ExpanderS>
  );
};

export default DropDown;
