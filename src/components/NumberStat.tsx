import React from "react";
import "./NumberStat.css";
import { render } from "react-dom";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function NumberStat(props: any) {
  return (
    <div className="numberStat__number">
      <VisibilitySensor>
        {({ isVisible }) => (
          <div className="numberStat__number">
            {isVisible ? (
              <CountUp
                start={0}
                end={props.number}
                suffix={props.suffix}
                duration={2.0}
                delay={0.2}
              />
            ) : (
              <CountUp
                start={0}
                end={0}
                suffix={props.suffix}
                duration={0}
                delay={0}
              />
            )}
          </div>
        )}
      </VisibilitySensor>
      <p className="numberStat__stat">{props.stat}</p>
    </div>
  );
}

export default NumberStat;
