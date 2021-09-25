import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Collapse from "react-bootstrap/Collapse";
import TournamentsByMonth from "./TournamentsByMonth";
import React, {useState} from "react";
import {ITournament} from "../../types/TournamentTypes";
import {Months} from "../../types/DateEnums";
import './CollapsableMonth.css'

interface IProps {
    tournaments: ITournament[],
    monthName: string
}

function CollapsableMonth({monthName, tournaments}: IProps) {

    const [isVisible, setIsVisible] = useState(true)

    const tournamentsMatchingMonth = tournaments.filter(tournament => {
        const date = new Date(tournament.Date);
        // @ts-ignore // ts lint believes monthName string with enum could lead to non-integer value
        return Months[monthName] === date.getMonth()
    })

    return (
        <div key={monthName + '-div-key'} className={'tournaments-by-month-div'}>
            <div className={'month-heading-div'}>
                <h2 className={'month-heading'}>{monthName}</h2>
                {
                    (isVisible && tournamentsMatchingMonth.length > 0) ?
                        <KeyboardArrowDownIcon onClick={() => setIsVisible(!isVisible)}
                                               className={'month-heading-collapse-btn'}/> :
                        <KeyboardArrowRightIcon onClick={() => setIsVisible(!isVisible)}
                                                className={'month-heading-collapse-btn'}/>
                }
            </div>
            <Collapse key={monthName + '-div-key-collapse'} in={isVisible}>
                <div>
                    <TournamentsByMonth tournaments={tournamentsMatchingMonth}/>
                </div>
            </Collapse>
        </div>
    )
}

export default CollapsableMonth;