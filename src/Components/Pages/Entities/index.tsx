import React, { FC, useEffect, useState } from "react";
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
//function
import compare from "Functions/compare";
//interface
import IPhotoReducer from "Reduces/photo/IPhotoReducer";
import IState from "Reduces/IState";
import getFullScreen, { GetFullScreen } from "Actions/PageInfo/getFullScreen";
import IPageInfoReducer from "Reduces/pageInfo/IPageInfoReducer";
import Filter from "./Filter";

const Entities: FC = () => {
  const dispatch = useDispatch();
  const { photos, pageInfo } = useSelector<
    IState,
    IPhotoReducer & IPageInfoReducer
  >((GS) => ({
    ...GS.photos,
    ...GS.pageInfo,
  }));

  useEffect(() => {
    dispatch<GetPageInfoIcon>(
      getPageInfoIcon("Entities", "Entities", IconType.entities)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [state, setState] = useState({
    text: "",
    sort: false,
    entities: JSON.Entities,
    filter: false,
    line: false,
  });

  const setFullScreen = () => {
    dispatch<GetFullScreen>(getFullScreen(true));
  };

  const undoFullScreen = () => {
    dispatch<GetFullScreen>(getFullScreen(false));
  };

  const share = () => {
    navigator.clipboard.writeText(document.URL);
  };

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      text: e.target.value,
    });
  };

  const sort = () => {
    setState({
      ...state,
      sort: !state.sort,
    });
  };

  const filter = () => {
    setState({
      ...state,
      filter: !state.filter,
    });
  };

  const line = () => {
    setState({
      ...state,
      line: !state.line,
    });
  };

  useEffect(() => {
    const array = JSON.Entities.filter((a) =>
      compare(a.title, state.text)
    ).sort((b, c) => {
      if (!state.sort) return 0;
      return b.title.localeCompare(c.title);
    });

    setState({
      ...state,
      entities: array,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.sort, state.text]);

  const format = state.line ? "column" : "row";

  return (
    <CSS.ContentS>
      <CSS.LineS>
        <CSS.LeftS>
          Entities
          <BoxIcon iconSize={IconSize.mini} iconType={IconType.cog} alt="" />
        </CSS.LeftS>
        <CSS.RightS>
          <CSS.PointerS onClick={line}>
            <CSS.LineS>
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.mosaic}
                alt=""
              />
              {state.line ? "" : "Mosaic"}
            </CSS.LineS>
            <CSS.LineS>
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.list}
                alt=""
              />
              {state.line ? "Line" : ""}
            </CSS.LineS>
          </CSS.PointerS>
        </CSS.RightS>
      </CSS.LineS>
      <CSS.LineS>
        <CSS.LeftS>
          <DropDown
            leftIcon={IconType.rec}
            imageIconSwitch={false}
            Text="All"
            height="120px"
            width="auto"
          >
            <CSS.EmElementS>
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.rec}
                alt={""}
              />
              All
            </CSS.EmElementS>
            <CSS.EmElementS>
              <BoxIcon
                iconSize={IconSize.small}
                iconType={IconType.rec}
                alt={""}
              />
              Not all
            </CSS.EmElementS>
          </DropDown>
          <CSS.RightBorder>
            <Icon iconSize={IconSize.small} iconType={IconType.more} alt="" />
          </CSS.RightBorder>
          <CSS.RightBorder>
            <CSS.PointerS onClick={sort}>
              <Icon iconSize={IconSize.small} iconType={IconType.sort} alt="" />
              Sort
            </CSS.PointerS>
            <CSS.PointerS onClick={filter}>
              <Icon
                iconSize={IconSize.small}
                iconType={IconType.filter}
                alt=""
              />
              Filters
            </CSS.PointerS>
          </CSS.RightBorder>
          <CSS.RightBorder>
            <BoxIcon
              iconSize={IconSize.small}
              iconType={
                pageInfo.fullScreen ? IconType.collapse : IconType.expand
              }
              alt=""
              onClick={pageInfo.fullScreen ? undoFullScreen : setFullScreen}
            />
          </CSS.RightBorder>
          <CSS.PointerS onClick={share}>
            <BoxIcon
              iconSize={IconSize.small}
              iconType={IconType.share}
              alt=""
            />
            Share
          </CSS.PointerS>
        </CSS.LeftS>
        <CSS.RightS>
          <InputLabel
            label="Search"
            button={true}
            border={true}
            fontSize="14"
            change={changeText}
            value={state.text}
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
      {state.filter ? <Filter /> : <></>}
      <CSS.EntitiesS direction={format}>
        {state.entities.map((val, i) => {
          const photo = photos?.find((a) => a.id === val.photoID);
          return (
            <Entity
              key={i}
              direction={state.line}
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
