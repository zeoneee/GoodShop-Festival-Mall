import styled from "styled-components";

const PageNumberBtn = styled.button<{ on: string }>`
  background-color: ${({ on }) => (on === "on" ? "#FDDC26" : "#F2F2F2")};
  width: 50px;
  height: 50px;
  font-size: 20px;
  border-radius: 50%;
  margin: 10px;
`;
const PrevBtn = styled.button`
  width: 50px;
  height: 50px;
  &:hover {
    background-color: --color-main;
    border-radius: 50%;
    &:disabled {
      background-color: --color-brightGrey;
    }
  }
  &:disabled {
    cursor: default;
  }
`;

const NextBtn = styled.button``;

const PagenationBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export { PageNumberBtn, PrevBtn, NextBtn, PagenationBtnWrapper };
