import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Framer Motion
import { motion } from "framer-motion";
import {
  fade,
  lineExtendAnimation,
  pageAnimation,
  photoAnimation,
  slider,
  sliderContainer
} from "../animation";

const OurWork = () => {
  return (
    <Work
      animate="show"
      exit="exit"
      initial="hidden"
      style={{ background: "#fff" }}
      variants={pageAnimation}
    >
      <motion.div variants={sliderContainer}>
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      </motion.div>
      {/* First Photo */}
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div
          variants={lineExtendAnimation}
          className="line"
        ></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={athlete}
              alt="athlete"
            ></motion.img>
          </Hide>
        </Link>
      </Movie>
      {/* Second Photo*/}
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="TheRacer"></img>
        </Link>
      </Movie>
      {/* Third Photo*/}
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="GoodTimes"></img>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8eb2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
