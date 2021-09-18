import {Months} from "../types/Months";
import React from "react";
import {ITournament} from "../types/TournamentTypes";
import './TournamentsByMonth.css';

interface IProps {
    tournaments: ITournament[],
    monthValue: string
}

function TournamentsByMonth({monthValue, tournaments}: IProps) {

    return (
        <div>
            {
                tournaments.map((tournament) => {
                    const date = new Date(tournament.Date);
                    // @ts-ignore // ts believes string monthValue leads could lead to non integer
                    return Months[monthValue] === date.getMonth() ?
                        (
                            <div className='tournaments-div'>
                                <div className='tournament-date-heading'>
                                    <p className='tournament-date'>{tournament.Date.toLocaleString().substring(0, 12)}</p>
                                </div>
                                <div className='tournament-data'>
                                    <p className='tournament-data-item'>{tournament.Name}</p>
                                    <p className='tournament-data-item'>{tournament.PrizePool}</p>
                                    <a className='tournament-data-item' href={tournament.Stream}>
                                        {tournament.Stream.split('//')[1]}
                                    </a>
                                    <a className='tournament-data-item' href={tournament.FormatLink}>
                                        {tournament.FormatName}
                                    </a>
                                </div>
                            </div>) : null
                })
            }
        </div>
    );
}

export default TournamentsByMonth;