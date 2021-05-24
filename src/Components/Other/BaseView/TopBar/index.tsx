import React, { FC } from "react";
import { useSelector } from "react-redux";
//data
import { colors } from "StyledHelpers/Colors";
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
        <Icon iconType={IconType.logo} iconSize={IconSize.medium} alt="Logo" />

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
          label="Search Legalcluster"
          width={500}
          button={true}
          border={true}
        />
      </Controls.TriangleConentCenter>
      <Controls.TriangleConentRight>
        <CSS.IconBoxS>
          <BoxIcon
            iconSize={IconSize.small}
            iconType={IconType.house}
            alt="Domek"
          />
        </CSS.IconBoxS>
        <CSS.IconBoxS>
          <BoxIcon
            iconSize={IconSize.small}
            iconType={IconType.comments}
            background={colors.Bg3}
            alt="Czat"
            rounded={true}
            value={3}
          />
        </CSS.IconBoxS>
        <CSS.IconBoxS>
          <BoxIcon
            iconSize={IconSize.small}
            iconType={IconType.bell}
            background={colors.Bg3}
            alt="Dzwoneczek"
            rounded={true}
            value={3}
          />
        </CSS.IconBoxS>
      </Controls.TriangleConentRight>
    </CSS.TobBarS>
  );
};

export default TopBar;
