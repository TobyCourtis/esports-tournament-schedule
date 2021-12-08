import React from "react";
import "./DateDetails.css"

interface IProps {
    date: Date
}

function DateDetails({date}: IProps) {

    const dateComponents = date.toString().split(" ")

    return (
        <div className={'date tournament-data-item'}>
            <div className={'date-item-div day-of-month-div'}>
                <span className={'date-item'}>{dateComponents[2]}</span>
            </div>
            <div className={'date-item-div day-of-week-div'}>
                <span className={'date-item'}>{dateComponents[0]}</span>
            </div>
            <div className={'date-item-div time-div'}>
                {/* TODO comment back in when data is more rich */}
                {/*<p className={'date-item'}>{dateComponents[4].substring(0,5)}</p>*/}
                <span className={'date-item'}>19:30</span>
            </div>
        </div>
    );
}

export default DateDetails;