import React, { useState } from "react";
import "./NumberStat.css";
import { render } from "react-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function NumberStat(props: any) {


  const [countupActive, setCountupActive] = useState(true);
  const [startNum, setStartNum] = useState(0);

  function detectVisible(isVisible: boolean, start:any) {
    if (isVisible) {
      setCountupActive(false); // Disable countup, so it cannot change again
      start();
    }
  }
  return (
    <div className="numberStat">
      <CountUp
        start={startNum}
        end={props.number}
        suffix={props.suffix}
        duration={2.0}
        delay={0.2}
        onEnd={()=>{setStartNum(props.number)}} >
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={(visible: boolean)=>{detectVisible(visible, start)}} active={countupActive}>
            <div className="numberStat__number">
              <span ref={countUpRef} />
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      <p className="numberStat__stat">{props.stat}</p>
    </div>
  );
}

export default NumberStat;
