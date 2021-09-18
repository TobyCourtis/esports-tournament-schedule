import React from "react";
import {Days} from "../../../types/DateEnums";

interface IProps {
    date: Date
}

function DateDetails({date}: IProps) {

    const dateLocale = date.toLocaleString()


    return (
        <div className={'date tournament-data-item'}>
            <p className={'date-item'}>{dateLocale.substring(0,2)}</p>
            <p className={'date-item'}>{Days[date.getDay()].substring(0,3)}</p>
            <p className={'date-item'}>{dateLocale.substring(12,17)}</p>
        </div>
    );
}

export default DateDetails;