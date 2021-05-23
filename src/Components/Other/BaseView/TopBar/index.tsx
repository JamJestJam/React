import React, { FC } from "react";
import { useSelector } from "react-redux";
//data
import { Colors } from "StyledHelpers/Colors";
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
//components
import Icon from "Components/Common/Icon";
import InputLabel from "Components/Common/Input/LabelInput";
import BoxIcon from "Components/Common/Icon/Boxing";
import DropDown from "Components/Common/DropDown";
import DdContent from "./DdContent";
//style
import * as CSS from "./css";
import * as Controls from "StyledHelpers/Controls";
//interface
import IPageInfoReducer from "Reduces/pageInfo/IPageInfoReducer";
import IState from "Reduces/IState";

const TopBar: FC = () => {
  const { pageInfo } = useSelector<IState, IPageInfoReducer>((GS) => ({
    ...GS.pageInfo,
  }));

  return (
    <CSS.TobBarS>
      <Controls.TriangleConentLeft>
        <Icon IconType={IconType.logo} IconSize={IconSize.medium} Alt="Logo" />

        <DropDown
          Text={pageInfo.pageName}
          leftIcon={pageInfo.pageIcon}
          leftImage={pageInfo.pageImage}
          height="466px"
          imageIconSwitch={pageInfo.imageIconSwitch}
        >
          <DdContent />
        </DropDown>
      </Controls.TriangleConentLeft>
      <Controls.TriangleConentCenter>
        <InputLabel
          Label="Search Legalcluster"
          Width={500}
          Button={true}
          Border={true}
        />
      </Controls.TriangleConentCenter>
      <Controls.TriangleConentRight>
        <CSS.IconBoxS>
          <BoxIcon
            IconSize={IconSize.small}
            IconType={IconType.house}
            Alt="Domek"
          />
        </CSS.IconBoxS>
        <CSS.IconBoxS>
          <BoxIcon
            IconSize={IconSize.small}
            IconType={IconType.comments}
            background={Colors.Bg3}
            Alt="Czat"
            rounded={true}
            value={3}
          />
        </CSS.IconBoxS>
        <CSS.IconBoxS>
          <BoxIcon
            IconSize={IconSize.small}
            IconType={IconType.bell}
            background={Colors.Bg3}
            Alt="Dzwoneczek"
            rounded={true}
            value={3}
          />
        </CSS.IconBoxS>
      </Controls.TriangleConentRight>
    </CSS.TobBarS>
  );
};

export default TopBar;
