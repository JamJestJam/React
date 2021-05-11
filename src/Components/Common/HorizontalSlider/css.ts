import styled from "styled-components";
//interface
import IMoving from "./IMoving";

export const SliderS = styled.div`
  cursor: default;
  overflow: hidden;
  padding-bottom: 10px;
`;

export const ContentS = styled.div<IMoving>`
  display: flex;
  position: relative;

  a {
    pointer-events: ${(props) => (props.moving ? "none" : "all")};
  }
`;
