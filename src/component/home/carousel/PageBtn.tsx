import React from "react";
import styled from "styled-components";
import swiper1 from "../../../asset/icon/icon-swiper-1.png";
import swiper2 from "../../../asset/icon/icon-swiper-2.png";

interface PageBtnProps {
  direction: string;
  moveSlide: () => void;
}

const PageBtnWrapper = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  left: ${({ direction }) => (direction === "prev" ? "28%" : "70%")};
  border-radius: 60%;
  padding: 10px 10px;
`;

const Pagebutton = styled.button<{ direction: string }>`
  width: 20px;
  height: 20px;
  background: ${({ direction }) =>
    direction === "prev"
      ? `url(${swiper1}) no-repeat`
      : `url(${swiper2}) no-repeat`};
`;

export default function PageBtn({ direction, moveSlide }: PageBtnProps) {
  return (
    <PageBtnWrapper type="button" onClick={moveSlide} direction={direction}>
      {direction === "next" && (
        <Pagebutton type="button" direction={direction}></Pagebutton>
      )}
      {direction === "prev" && (
        <Pagebutton type="button" direction={direction}></Pagebutton>
      )}
    </PageBtnWrapper>
  );
}
