import styled from "styled-components";
//interface
import IMoving from "./IMoving";

export const SliderS = styled.div`
  cursor: default;
`;

export const ContentS = styled.div<IMoving>`
  display: flex;

  a {
    pointer-events: ${(props) => (props.moving ? "none" : "all")};
  }
`;
