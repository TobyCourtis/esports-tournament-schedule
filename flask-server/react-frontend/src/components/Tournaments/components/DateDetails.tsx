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
            <div className={'date-item-div'}>
                <p className={'date-item'}>{dateLocale.substring(0, 2)}</p>
            </div>
            <div className={'date-item-div'}>
                <p className={'date-item'}>{Days[date.getDay()]}</p>
            </div>
            <div className={'date-item-div'}>
                <p className={'date-item'}>{dateLocale.substring(12, 17)}</p>
            </div>
        </div>
    );
}

export default DateDetails;