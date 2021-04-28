import React, { FC } from 'react';
//action
import getMonth from '../getMounth';
//components
import BoxImage from '../../../Common/Image/Boxing';
//css
import * as CSS from './css';
//interface
import IPublication from './IPublication';

const Publication: FC<IPublication> = (props) => {
  const date = new Date(props.data?.publishDate || '');
  const dateText = `
    ${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} 
    ${getMonth(date.getMonth())} 
    ${date.getFullYear()}`;

  return (
    <CSS.ContentS>
      <div>
        <BoxImage
          ImageName={props.data?.image || ''}
          Alt=""
          MaxHeight={80}
          MaxWidth={80}
          Margin="0"
        />
      </div>
      <CSS.PublicationS>
        <CSS.PublicationTextS>{props.data?.text}</CSS.PublicationTextS>
        <CSS.PubDataS>
          <div>{props.data ? dateText : ''}</div>
          <BoxImage
            ImageName={props.data?.owner.picture || ''}
            Alt=""
            MaxWidth={20}
            MaxHeight={20}
            Rounded={true}
            Margin="5px"
          />
          <CSS.NameS>
            {props.data?.owner.firstName} {props.data?.owner.lastName}
          </CSS.NameS>
        </CSS.PubDataS>
      </CSS.PublicationS>
    </CSS.ContentS>
  );
};

export default Publication;
