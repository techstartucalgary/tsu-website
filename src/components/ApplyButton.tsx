import * as S from "./ApplyButton.styles";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

type ApplyButtonProps = {
  initialPointX: number;
  finalPointX: number;
  duration: number;
  delay: number;
  motionType: string;
  stiffness: number;
  hasSlidingArrows: boolean;
};

const ApplyButton = (props: ApplyButtonProps) => {
  const animationControl = useAnimation();
  const { inView, ref } = useInView();
  if (inView) {
    animationControl.start({
      x: props.finalPointX,
      transition: {
        duration: props.duration,
        delay: props.delay,
        type: props.motionType,
        stiffness: props.stiffness,
      },
    });
  }
  return (
    <div ref={ref}>
      <motion.div
        className="homePage__applyButtonBox"
        initial={{ x: props.initialPointX }}
        animate={animationControl}
      >
        <S.ApplyButtonLink to="/apply">
          <S.ApplyButton>
            {props.hasSlidingArrows && (
              <S.ApplyButtonArrow>
                {" "}
                <span>&#62;</span>
                <span>&#62;</span>{" "}
              </S.ApplyButtonArrow>
            )}
            <S.ApplyButtonText> theTeam.join()</S.ApplyButtonText>
          </S.ApplyButton>
        </S.ApplyButtonLink>
      </motion.div>
    </div>
  );
};

export default ApplyButton;
