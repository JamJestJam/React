import React, { FC } from "react";
//data
import { IconSize } from "Components/Common/Icon/IconSize";
//component
import BoxIcon from "Components/Common/Icon/Boxing";
import BoxImage from "Components/Common/Image/Boxing";
import ResumeYourWork from "Components/Other/ResumeYourWork";
//style
import * as CSS from "./css";
//interface
import IRemind from "./IRemind";
import Icon from "Components/Common/Icon";
import { IconType } from "Components/Common/Icon/IconType";

const Remind: FC<IRemind> = (props) => {
  return (
    <>
      <CSS.TopS>
        <div>
          <BoxImage
            imageName={`.${props.image}`}
            alt=""
            maxHeight={200}
            maxWidth={860}
          />
          <CSS.TopTileS>
            <BoxIcon iconSize={IconSize.large} iconType={props.icon} alt="" />
            <CSS.TopBottonContS>
              <CSS.TopContS>{props.name}</CSS.TopContS>
              <CSS.BottomContS>
                Workspace purpose and a bit of context this much needed
                descrption is here to remind people where theay are, if they are
                new or have poor memory
              </CSS.BottomContS>
            </CSS.TopBottonContS>
          </CSS.TopTileS>
        </div>
      </CSS.TopS>
      <CSS.MidBarS>
        <div>Start working on corporate matters</div>
        <CSS.TContS>
          <CSS.TLeftS>
            <CSS.EleS>
              <Icon
                iconSize={IconSize.medium}
                iconType={IconType.entities}
                alt=""
              />
              <div>
                Explore your <b>entities</b>
              </div>
              <div>
                Take a few minutes to look at the most important elements and
                specificiies of your entities.
              </div>
            </CSS.EleS>
          </CSS.TLeftS>
          <CSS.TCentS>
            <CSS.EleS>
              <Icon
                iconSize={IconSize.medium}
                iconType={IconType.diagram}
                alt=""
              />
              <div>
                Structure the <b>ownership</b>
              </div>
              <div>
                Get a clear view of the ownership by looking at the relations
                between individuals and entities.
              </div>
            </CSS.EleS>
          </CSS.TCentS>
          <CSS.TRightS>
            <CSS.EleS>
              <Icon
                iconSize={IconSize.medium}
                iconType={IconType.calendar}
                alt=""
              />
              <div>
                Define the <b>calendar</b>
              </div>
              <div>
                Prepare future events by creating detailed plans around thge
                life of your entity.
              </div>
            </CSS.EleS>
          </CSS.TRightS>
        </CSS.TContS>
      </CSS.MidBarS>
      <ResumeYourWork />
    </>
  );
};
export default Remind;
