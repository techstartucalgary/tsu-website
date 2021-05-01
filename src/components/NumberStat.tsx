import React from 'react';
import './NumberStat.css';
import { render } from 'react-dom';
import CountUp from 'react-countup';




function NumberStat(props: any) {

    return <div className="numberStat">
        <div className="numberStat__number">
            <CountUp start={0} end={props.number} duration={1.7} delay={0.2} /></div>
        <p className="numberStat__stat">{props.stat}</p>
    </div>
}

export default NumberStat;