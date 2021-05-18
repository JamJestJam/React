import styled from "styled-components";

export const ContentS = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const contentS = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`;

export const LeftS = styled(contentS)``;

export const RightS = styled(contentS)`
  > div {
    text-align: right;
  }
`;

export const BoldS = styled.div`
  font-weight: bold;
`;

export const EditS = styled.div`
  position: absolute;
  display: flex;

  right: 0;
  top: 0;

  >div{
    cursor: pointer;
  }
`;
