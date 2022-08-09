import React from "react";
import { About, Description, Image } from "../styles";
import styled from "styled-components";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

//Images
import homeImg1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={homeImg1} alt="camera guy" />
      </Image>
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
