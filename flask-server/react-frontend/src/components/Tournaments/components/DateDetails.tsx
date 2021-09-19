import React from "react";
import {Days} from "../../../types/DateEnums";
import "./DateDetails.css"

interface IProps {
    date: Date
}

function DateDetails({date}: IProps) {

    const dateLocale = date.toLocaleString()

    return (
        <div className={'date tournament-data-item'}>
            <div className={'date-item-div day-of-month-div'}>
                <span className={'date-item'}>{dateLocale.substring(0, 2)}</span>
            </div>
            <div className={'date-item-div day-of-week-div'}>
                <span className={'date-item'}>{Days[date.getDay()]}</span>
            </div>
            <div className={'date-item-div time-div'}>
                {/* TODO comment back in when data is more rich */}
                {/*<p className={'date-item'}>{dateLocale.substring(12, 17)}</p>*/}
                <span className={'date-item'}>19:30</span>
            </div>
        </div>
    );
}

export default DateDetails;