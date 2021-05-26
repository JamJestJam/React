import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import getPageInfoIcon, {
  GetPageInfoIcon,
} from "Actions/PageInfo/getPageInfoIcon";
//data
import { IconType } from "Components/Common/Icon/IconType";
//style
import * as CSS from "./css";
//components
import BoxIcon from "Components/Common/Icon/Boxing";
import Icon from "Components/Common/Icon";
import InputLabel from "Components/Common/Input/LabelInput";
import DropDown from "Components/Common/DropDown";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
import JSON from "Data/entities.json";
import Entity from "./Entity";
//interface
import IPhotoReducer from "Reduces/photo/IPhotoReducer";
import IState from "Reduces/IState";
import getFullScreen, { GetFullScreen } from "Actions/PageInfo/getFullScreen";
import IPageInfoReducer from "Reduces/pageInfo/IPageInfoReducer";

const Entities: FC = () => {
  const dispatch = useDispatch();
  const { photos, pageInfo } = useSelector<IState, IPhotoReducer & IPageInfoReducer>((GS) => ({
    ...GS.photos,
    ...GS.pageInfo
  }));

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon("Entities", "Entities", IconType.entities, null)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFullScreen = () => {
    dispatch<GetFullScreen>(getFullScreen(true));
  };
  
  const undoFullScreen=()=>{
    dispatch<GetFullScreen>(getFullScreen(false));
  }

  return (
    <CSS.ContentS>
      <CSS.LineS>
        <CSS.LeftS>
          Entities
          <BoxIcon iconSize={IconSize.mini} iconType={IconType.cog} alt="" />
        </CSS.LeftS>
        <CSS.RightS>
          <CSS.LineS>
            <BoxIcon
              iconSize={IconSize.small}
              iconType={IconType.bell}
              alt=""
            />
            Mosaic
          </CSS.LineS>
          <CSS.LineS>
            <BoxIcon
              iconSize={IconSize.small}
              iconType={IconType.bell}
              alt=""
            />
            Line
          </CSS.LineS>
        </CSS.RightS>
      </CSS.LineS>
      <CSS.LineS>
        <CSS.LeftS>
          <DropDown
            leftIcon={IconType.broadcast}
            imageIconSwitch={false}
            Text="All"
            height="120px"
            width="auto"
          >
            <CSS.EmElementS>
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.broadcast}
                alt={""}
              />
              All
            </CSS.EmElementS>
            <CSS.EmElementS>
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.broadcast}
                alt={""}
              />
              Not all
            </CSS.EmElementS>
          </DropDown>
          <CSS.RightBorder>
            <Icon iconSize={IconSize.small} iconType={IconType.bell} alt="" />
          </CSS.RightBorder>
          <CSS.RightBorder>
            <Icon iconSize={IconSize.small} iconType={IconType.bell} alt="" />
            Sort
            <Icon iconSize={IconSize.small} iconType={IconType.bell} alt="" />
            Filters
          </CSS.RightBorder>
          <CSS.RightBorder>
            <BoxIcon
              iconSize={IconSize.small}
              iconType={IconType.bell}
              alt=""
              onClick={(pageInfo.fullScreen)?undoFullScreen:setFullScreen}
            />
          </CSS.RightBorder>
          <BoxIcon iconSize={IconSize.small} iconType={IconType.bell} alt="" />
          Share
        </CSS.LeftS>
        <CSS.RightS>
          <InputLabel
            label="Search"
            button={true}
            border={true}
            fontSize="14"
          />
          <DropDown
            leftIcon={IconType.broadcast}
            imageIconSwitch={false}
            Text="Followed"
            height="120px"
            width="auto"
          >
            <CSS.EmElementS>
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.broadcast}
                alt={""}
              />
              My
            </CSS.EmElementS>
            <CSS.EmElementS>
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.broadcast}
                alt={""}
              />
              Followed
            </CSS.EmElementS>
          </DropDown>
        </CSS.RightS>
      </CSS.LineS>
      <CSS.EntitiesS>
        {JSON.Entities.map((val, i) => {
          const photo = photos?.find((a) => a.id === val.photoID);
          return (
            <Entity
              key={i}
              title={val.title}
              subTitle={val.comment}
              photo={photo?.url || ""}
            />
          );
        })}
      </CSS.EntitiesS>
    </CSS.ContentS>
  );
};

export default Entities;
