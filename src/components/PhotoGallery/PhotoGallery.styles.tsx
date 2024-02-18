import styled from "styled-components";
import { motion } from "framer-motion";

export const PicturesContainer = styled.div`
  // mobile
  column-count: 1;
  column-gap: 24;
  max-width: 1024px;
  margin: 2em auto;

  style= {
     {
      margin: "auto 2%";
    }
  }

  // ipad
  @media (min-width: 768px) {
    column-count: 2;
  }

  // desktop
  @media (min-width: 1024px) {
    column-count: 3;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 24px;
  background-color: grey;
`;

export const PicturesHeader = styled(motion.div)`
  data-aos="fade-up"
  data-aos-offset="200"
  data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out"
  data-aos-mirror="true"
  data-aos-once="false"
  data-aos-anchor-placement="top"
  color: white
  min-height: 100vh;
  `;
