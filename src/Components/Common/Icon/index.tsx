import { FC } from 'react';
//data
import { GetIcon } from './IconType';
//components
import IIcon from './IIcon';
//css
import IconS from './css';

const Icon: FC<IIcon> = (props) => {
  return (
    <IconS
      Size={props.IconSize}
      Border={props.Bordered || false}
      src={GetIcon(props.IconType)}
      alt={props.Alt}
    />
  );
};

export default Icon;
