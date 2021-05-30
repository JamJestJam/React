import DropDown from "Components/Common/DropDown";
import BoxIcon from "Components/Common/Icon/Boxing";
import { IconSize } from "Components/Common/Icon/IconSize";
import { IconType } from "Components/Common/Icon/IconType";
import InputLabel from "Components/Common/Input/LabelInput";
import { FC } from "react";
//style
import * as CSS from "./css";

const Filter: FC = () => {
  return (
    <CSS.ContentS>
      <CSS.FlineS>
        Rows are fultered by the following conditions starting from the top.
      </CSS.FlineS>
      <CSS.LineS>
        <BoxIcon iconSize={IconSize.small} iconType={IconType.exit} alt="" />
        <CSS.DivS>Where</CSS.DivS>
        <DropDown Text="Company" width="100px" />
        <DropDown Text="Contains" width="120px" />
        <InputLabel label="Type" width={200} />
      </CSS.LineS>
      <CSS.LineS>
        <BoxIcon iconSize={IconSize.small} iconType={IconType.exit} alt="" />
        <CSS.DivS>Where</CSS.DivS>
        <DropDown Text="Status" width="100px" />
        <DropDown Text="Is" width="120px" />
        <InputLabel label="Type" width={200} />
        <DropDown Text="Is" width="auto" />
        <InputLabel label="Entity" width={200} />
      </CSS.LineS>
      <CSS.LineS>
        <BoxIcon iconSize={IconSize.small} iconType={IconType.exit} alt="" />
        <CSS.DivS>And</CSS.DivS>
        <DropDown Text="Status" width="100px" />
        <DropDown Text="Ends before" width="120px" />
        <InputLabel label="Date" width={200} />
        <DropDown Text="Is" width="auto" />
        <InputLabel label="Entity" width={200} />
      </CSS.LineS>
      <CSS.BlueS>
        <BoxIcon iconSize={IconSize.small} iconType={IconType.plus} alt="" />
        ADD filter
        <CSS.DivS />
        <DropDown Text="choose property" />
      </CSS.BlueS>
    </CSS.ContentS>
  );
};

export default Filter;
