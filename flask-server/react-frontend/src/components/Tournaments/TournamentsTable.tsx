import React from 'react';
import {ITournament} from '../../types/TournamentTypes';
import './TournamentTable.css'
import {Months} from "../../types/DateEnums";
import TournamentsByMonth from "./TournamentsByMonth";
import Icon from '@mui/material/Icon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface IProps {
    tournaments: ITournament[]
}

function TournamentsTable(props: IProps) {

    let monthNow = new Date().getMonth();
    const months: string[] = [];
    for (let i = 0; i < 5; i++) {
        months.push(Months[monthNow % 12])
        monthNow++
    }

    return (
        <div>
            {
                months.map((month) => (
                    <div key={month + '-div-key'} className={'tournaments-by-month-div'}>
                        <div>
                            <h2 className={'month-heading'}>{month}</h2>
                            <KeyboardArrowDownIcon />
                        </div>
                        <TournamentsByMonth monthName={month} tournaments={props.tournaments}/>
                    </div>
                ))
            }
        </div>
    );
}

export default TournamentsTable;