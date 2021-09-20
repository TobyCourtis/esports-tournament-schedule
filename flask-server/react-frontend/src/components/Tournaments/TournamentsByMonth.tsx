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
                                            <div className={'main-tournament-info-item tournament-name-div'}>
                                                <b className={'tournament-name'}>{tournament.Name}</b>
                                            </div>
                                            <div className='main-tournament-info-item prize-pool-div'>
                                                <img className={'trophy-img'} src={'trophy.png'} alt="trophy"/>
                                                <p>{tournament.PrizePool}</p>
                                            </div>
                                            <div className={'main-tournament-info-item tournament-format-div'}>
                                                <a className={'tournament-format'} href={tournament.FormatLink}>
                                                    Format: {tournament.FormatName}
                                                </a>
                                            </div>
                                            <div className={'main-tournament-info-item main-tournament-spacer-div'} />
                                            <div className={'main-tournament-info-item tournament-rules-div'}>
                                                <a href={tournament.FormatLink}>Rules</a>
                                            </div>
                                        </div>
                                        <div className={'spacer-div'}/>
                                        <div className={'stream-link-div'}>
                                            <a href={tournament.Stream}>
                                                {
                                                    // TODO change Stream icon depending on stream URL
                                                    tournament.Name == 'HP Omen' ?
                                                        <img src={'youtube.png'} className={'youtube-img'}/> :
                                                        <img src={'twitch.png'} className={'twitch-img'}/>
                                                }

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