import * as S from "./ApplyButton.styles";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ApplyButton = () => {
  const animationControl = useAnimation();
  const { inView, ref } = useInView();
  if (inView) {
    animationControl.start({
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.0,
        type: "spring",
        stiffness: 70,
      },
    });
  }

  return (
    <div ref={ref}>
      <motion.div
        className="homePage__applyButtonBox"
        initial={{ x: "-100vw" }}
        animate={animationControl}
      >
        <S.ApplyButtonLink to="/apply">
          <S.ApplyButton>
            <S.ApplyButtonArrow>
              {" "}
              <span>&#62;</span>
              <span>&#62;</span>{" "}
            </S.ApplyButtonArrow>
            <S.ApplyButtonText> theTeam.join()</S.ApplyButtonText>
          </S.ApplyButton>
        </S.ApplyButtonLink>
      </motion.div>
    </div>
  );
};

export default ApplyButton;
