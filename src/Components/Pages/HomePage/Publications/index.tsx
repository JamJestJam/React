import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
//components
import BoxImage from "Components/Common/Image/Boxing";
import Publication from "./Publication";
//style
import * as CSS from "./css";
//interface
import IState from "Reduces/IState";
import IPostReducer from "Reduces/post/IPostReducer";

function RandomNumbers(count: number, max = 20): number[] {
    const numbers: number[] = [];
    if (count >= max) {
        while (numbers.length < count) numbers.push(0);
        return numbers;
    }

    while (numbers.length < count) {
        var r = Math.floor(Math.random() * max) + 1;
        if (numbers.indexOf(r) === -1) numbers.push(r);
    }
    return numbers;
}

const Publications: FC = () => {
    const { posts } = useSelector<IState, IPostReducer>((GS) => ({
        ...GS.posts,
    }));
    const postID = useMemo(() => RandomNumbers(4, posts.length - 1), [
        posts.length,
    ]);

    return (
        <CSS.ContentS>
            <CSS.LeftS>
                <BoxImage
                    ImageName={posts[postID[3]]?.photo?.url || ""}
                    Alt=""
                    MaxWidth={300}
                    MaxHeight={300}
                />
                <CSS.PublicationS>
                    {posts[postID[3]]?.body}
                    <CSS.PubDataS>
                        <div>
                            <div>{posts[postID[3]] ? "" : ""}</div>
                        </div>
                        <BoxImage
                            ImageName={posts[postID[3]]?.owner?.photo?.url || ""}
                            Alt=""
                            MaxWidth={30}
                            MaxHeight={30}
                            Rounded={true}
                            Margin="10px"
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
