import React from 'react';
import './NumberStat.css';

function NumberStat(props: any){

    return <div className="numberStat">
        <div className="numberStat__number">{props.number}{props.extra}</div>
        <p className="numberStat__stat">{props.stat}</p>
    </div>
}

export default NumberStat;