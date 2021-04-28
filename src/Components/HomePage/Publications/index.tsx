import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
//action
import getMonth from './getMounth';
//components
import BoxImage from '../../Common/Image/Boxing';
import Publication from './Publication';
//css
import * as CSS from './css';
//interface
import IState from '../../../Reduces/IState';
import IPostReducer from '../../../Reduces/post/IPostReducer';

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

  const date = new Date(posts[postID[3]]?.publishDate || '');
  const dateText = `
    ${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} 
    ${getMonth(date.getMonth())} 
    ${date.getFullYear()}`;

  return (
    <CSS.ContentS>
      <CSS.LeftS>
        <BoxImage
          ImageName={posts[postID[3]]?.image || ''}
          Alt=""
          MaxWidth={300}
          MaxHeight={300}
        />
        <CSS.PublicationS>
          {posts[postID[3]]?.text}
          <CSS.PubDataS>
            <div>
              <div>{posts[postID[3]] ? dateText : ''}</div>
            </div>
            <BoxImage
              ImageName={posts[postID[3]]?.owner.picture}
              Alt=""
              MaxWidth={30}
              MaxHeight={30}
              Rounded={true}
              Margin="10px"
            />
            <div>
              {posts[postID[3]]?.owner.firstName}{' '}
              {posts[postID[3]]?.owner.lastName}
            </div>
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
