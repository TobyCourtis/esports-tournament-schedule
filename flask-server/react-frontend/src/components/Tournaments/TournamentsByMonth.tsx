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
                    // @ts-ignore // ts lint believes monthName string with enum could lead to non-integer value
                    return Months[monthName] === date.getMonth() ?
                        (
                            <div key={tournament.ID + '-div-key'} className='tournaments-outer-div'>
                                <div className='tournaments-inner-div'>
                                    <div className='tournament-data'>
                                        <DateDetails date={date}/>
                                        <hr className={'vertical-line'}/>
                                        <div className={'main-tournament-info-div'}>
                                            <p className={'tournament-name'}>{tournament.Name}</p>
                                            <div className='prize-pool-div'>
                                                <img className={'trophy-img'} src={'trophy.png'} alt="trophy"/>
                                                <p>{tournament.PrizePool}</p>
                                            </div>
                                            <a className={'tournament-format'} href={tournament.FormatLink}>
                                                Format: {tournament.FormatName}
                                            </a>
                                        </div>
                                        <div className={'spacer-div'}/>
                                        <div className={'stream-link-div'}>
                                            <a href={tournament.Stream}>
                                                <img src={'monitor.png'} className={'monitor-img'}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>) : null
                })
            }
        </div>
    );
}

export default TournamentsByMonth;