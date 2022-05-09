import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import * as S from "./CustomButton.styles";

type CustomButtonProps = {
  initialPointX: number;
  finalPointX: number;
  duration: number;
  delay: number;
  motionType: string;
  stiffness: number;
  hasSlidingArrows: boolean;
  mode: S.ButtonMode;
  text: string;
  link: string;
  linkIsInternal: boolean;
  glowOnHover?: boolean;
};

const CustomButtonComponent = (props: CustomButtonProps) => (
  <S.CustomButton
    mode={props.mode}
    glowOnHover={props.glowOnHover}
    target="_blank"
    rel="noreferrer"
    href={!props.linkIsInternal ? props.link : ""}
  >
    {props.hasSlidingArrows && (
      <S.CustomButtonArrow>
        {" "}
        <span>&#62;</span>
        <span>&#62;</span>{" "}
      </S.CustomButtonArrow>
    )}
    <S.CustomButtonText>{props.text} </S.CustomButtonText>
  </S.CustomButton>
);

const CustomButton = (props: CustomButtonProps) => {
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
        {props.linkIsInternal ? (
          <S.CustomButtonLink to={props.link}>
            {" "}
            {CustomButtonComponent(props)}
          </S.CustomButtonLink>
        ) : (
          CustomButtonComponent(props)
        )}
      </motion.div>
    </div>
  );
};

export default CustomButton;
