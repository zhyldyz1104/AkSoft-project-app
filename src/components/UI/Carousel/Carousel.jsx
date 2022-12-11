import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

import { ReactComponent as Right } from "../../../assets/logo/right.svg";
import { ReactComponent as Left } from "../../../assets/logo/left.svg";
import WorkCard from "./WorkCard";

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.3,
  arrows: true,
};
const Carousel = () => {
  return (
    <Box className="slider-wrapper">
      <Slide {...properties} nextArrow={<Right />} prevArrow={<Left />}>
        <Flex>
          <WorkCard />
          <WorkCard />
        </Flex>
        <Flex>
          <WorkCard />
          <WorkCard />
        </Flex>
        <Flex>
          <WorkCard />
          <WorkCard />
        </Flex>
      </Slide>
    </Box>
  );
};
export default Carousel;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  height: 650px;
  & > div > div > button > svg {
    width: 12px;
  }
  .react-slideshow-container + ul.indicators .each-slideshow-indicator:before {
    background: #cb11ab;
    /* margin-top: 20px; */
  }
  .each-slideshow-indicator {
  }
  .react-slideshow-container
    + ul.indicators
    .each-slideshow-indicator.active:before {
    background: #cb11ab;
    width: 10px;
    height: 10px;
  }
  .react-slideshow-container + ul.indicators li {
    display: none;
  }
`;
