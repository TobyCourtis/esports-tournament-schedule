import React from 'react';
import {ITournament} from '../../types/TournamentTypes';
import './TournamentTable.css'
import {Months} from "../../types/DateEnums";
import CollapsableMonth from "./CollapsableMonth";

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
        <div className={'tournaments-table-div'}>
            {
                months.map((month) => (
                    <CollapsableMonth monthName={month} tournaments={props.tournaments} key={month + 'collapsing-div'}/>
                ))
            }
        </div>
    );
}

export default TournamentsTable;