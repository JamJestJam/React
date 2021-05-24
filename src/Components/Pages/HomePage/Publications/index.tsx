import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
//components
import BoxImage from "Components/Common/Image/Boxing";
import Publication from "./Publication";
//style
import * as CSS from "./css";
//function
import { RandomNumbers } from "Functions/randomNumber";
//interface
import IState from "Reduces/IState";
import IPostReducer from "Reduces/post/IPostReducer";

const Publications: FC = () => {
  const { posts } = useSelector<IState, IPostReducer>((GS) => ({
    ...GS.posts,
  }));
  const postID = useMemo(
    () => RandomNumbers(4, posts.length - 1),
    [posts.length]
  );

  return (
    <CSS.ContentS>
      <CSS.LeftS>
        <BoxImage
          imageName={posts[postID[3]]?.photo?.url || ""}
          alt=""
          maxWidth={300}
          maxHeight={300}
        />
        <CSS.PublicationS>
          {posts[postID[3]]?.body}
          <CSS.PubDataS>
            <div>
              <div>{posts[postID[3]] ? "" : ""}</div>
            </div>
            <BoxImage
              imageName={posts[postID[3]]?.owner?.photo?.url || ""}
              alt=""
              maxWidth={30}
              maxHeight={30}
              rounded={true}
              margin="10px"
            />
            <div>{posts[postID[3]]?.owner?.name}</div>
          </CSS.PubDataS>
        </CSS.PublicationS>
      </CSS.LeftS>
      <CSS.RightS>
        <CSS.TitleS>Latest publications</CSS.TitleS>
        <CSS.TopPublicationS>
          <Publication data={posts[postID[0]]} />
          <Publication data={posts[postID[1]]} />
          <Publication data={posts[postID[2]]} />
        </CSS.TopPublicationS>
        <CSS.SeeMoreS>See more publications</CSS.SeeMoreS>
      </CSS.RightS>
    </CSS.ContentS>
  );
};

export default Publications;
