import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutDescription>
        <div className="title">
          <AboutHide>
            <h2>We work to make</h2>
          </AboutHide>
          <AboutHide>
            <h2>
              your <span>dreams</span>come
            </h2>
          </AboutHide>
          <AboutHide>
            <h2>true</h2>
          </AboutHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills!
        </p>
        <button>Contact Us</button>
      </AboutDescription>
      <AboutImage>
        <img src={home1} alt="guy with camera" />
      </AboutImage>
    </AboutContainer>
  );
};

//Styled Components
const AboutContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const AboutDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter}
`

const AboutImage = styled.div`
    flex:1;
    overflow:hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const AboutHide = styled.div`
    overflow:hidden;
`

export default AboutSection;
