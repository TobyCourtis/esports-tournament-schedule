import React from 'react';
import {ITournament} from '../types/TournamentTypes';
import './TournamentTable.css'
import {Months} from "../types/Months";
import TournamentsByMonth from "./TournamentsByMonth";

interface IProps {
    tournaments: ITournament[]
}

function TournamentsTable(props: IProps) {

    var monthNow = new Date().getMonth()
    var months: string[] = []
    for (let i = 0; i < 5; i++) {
        months.push(Months[monthNow % 12])
        monthNow++
    }

    return (
        <div>
            {
                months.map((month) => (
                    <div>
                        <h2>{month}</h2>
                        <TournamentsByMonth monthValue={month} tournaments={props.tournaments}/>
                    </div>
                ))
            }
        </div>
    );
}

export default TournamentsTable;