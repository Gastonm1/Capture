import styled from "styled-components";
import { motion } from "framer-motion";

//Styled Components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  //Mobile
  @media (max-width: 1350px) {
            display: block;
            padding: 2rem 2rem;
            text-align: center
        }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  //Mobile
  @media (max-width: 1350px) {
            padding: 0;
            margin: 2rem 0rem 5rem 0rem
        }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
