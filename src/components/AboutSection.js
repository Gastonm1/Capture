import React from "react";
import { About, Description, Image } from "../styles";
import styled from "styled-components";

//Framer Motion
import { motion } from "framer-motion";
//Images
import homeImg1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={homeImg1} alt="camera guy" />
      </Image>
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
