import styled from "styled-components";


export const ButtonS = styled.div`
  display: flex;
  background-color: ${props=>props.color};
  border-radius: 5px;

  &:hover {
    filter: brightness(85%);
  }
`;

export const ButtonLeftS = styled.div`
  justify-content: left;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const ButtonRightS = styled.div`
  justify-content: right;
  align-items: center;
  display: flex;
  margin-right: 5px;
`;
