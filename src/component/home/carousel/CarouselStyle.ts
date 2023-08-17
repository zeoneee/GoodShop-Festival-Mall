import styled from "styled-components";

const CarouselWrapper = styled.div`
  position: relative;
  box-shadow: inset 0px -4px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 0px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselImgWindow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 1000px;
  height: 500px;
  overflow: hidden;
  margin: 20px auto;
`;

const Carousel = styled.div``;

const Carouselimg = styled.img`
  width: 1000px;
  height: 500px;
`;

const IconWrap = styled.div`
  width: 200px;
  height: 100px;
  position: absolute;
  display: inline-block;
  bottom: -15%;
  left: 50%;
`;

const PageIcon = styled.div`
  display: inline-block;
  margin: 4px;
  width: 8px;
  height: 8px;
  background-color: var(--color-main);
  box-shadow: 1px 1px 2px var(--black);
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in 0.4s;
  &.icon {
    opacity: 0.4;
  }
  &.icon.active {
    opacity: 0.8;
  }
`;

export {
  Carouselimg,
  CarouselImgWindow,
  Carousel,
  PageIcon,
  IconWrap,
  CarouselWrapper,
};
