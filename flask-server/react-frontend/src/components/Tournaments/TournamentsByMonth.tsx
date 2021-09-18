import {Months} from "../../types/DateEnums";
import React from "react";
import {ITournament} from "../../types/TournamentTypes";
import './TournamentsByMonth.css';
import DateDetails from './components/DateDetails'

interface IProps {
    tournaments: ITournament[],
    monthName: string
}

function TournamentsByMonth({monthName, tournaments}: IProps) {

    return (
        <div>
            {
                tournaments.map((tournament) => {
                    const date = new Date(tournament.Date);
                    // @ts-ignore // ts believes string monthValue leads could lead to non integer
                    return Months[monthName] === date.getMonth() ?
                        (
                            <div className='tournaments-outer-div'>
                                <div className='tournaments-inner-div'>
                                    <div className='tournament-data'>
                                        <DateDetails date={date}/>
                                        <hr className={'vertical-line'}/>
                                        <p className='tournament-data-item'>{tournament.Name}</p>
                                        <p className='tournament-data-item'>{tournament.PrizePool}</p>
                                        <a className='tournament-data-item' href={tournament.Stream}>
                                            {tournament.Stream.split('//')[1]}
                                        </a>
                                        <a className='tournament-data-item' href={tournament.FormatLink}>
                                            {tournament.FormatName}
                                        </a>
                                    </div>
                                </div>
                            </div>) : null
                })
            }
        </div>
    );
}

export default TournamentsByMonth;