import { FontSize } from './../../../../StyledHelpers/Fonts';
import { Colors } from './../../../../StyledHelpers/Colors';
import styled from 'styled-components';
import ILabelS from './ILabelS';
import IFieldS from './IFieldS';

export const FieldS = styled.div<IFieldS>`
  border: 1px solid ${(props) => (props.Border ? Colors.Shadow : 'transparent')};
  transition: 0.2s ease all;
  position: relative;
  display: flex;

  border-bottom: ${(props) =>
    props.Focus ? '2px solid ' + Colors.Bg4 : '2px solid ' + Colors.Shadow};
`;

export const LabelS = styled.label<ILabelS>`
  color: ${(props) => (props.Focus ? Colors.GrayFont : Colors.BlueFont)};
  font-size: ${(props) =>
    props.Focus
      ? 'calc(' + FontSize[props.FontSize] + '* 0.75)'
      : FontSize[props.FontSize]};
  top: ${(props) => (props.Focus ? '0px' : '8px')};
  transition: 0.2s ease all;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
