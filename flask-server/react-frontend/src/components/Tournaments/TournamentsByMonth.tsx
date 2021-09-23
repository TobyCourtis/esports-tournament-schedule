import React from "react";
import {ITournament} from "../../types/TournamentTypes";
import './TournamentsByMonth.css';
import DateDetails from './components/DateDetails'

interface IProps {
    tournaments: ITournament[]
}

function TournamentsByMonth({tournaments}: IProps) {

    return (
        <div>
            {
                tournaments.map((tournament) => (
                    <div key={tournament.ID + '-div-key'} className='tournaments-outer-div'>
                        <div className='tournaments-inner-div'>
                            <div className='tournament-data'>
                                <DateDetails date={new Date(tournament.Date)}/>
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
                                    <div className={'main-tournament-info-item main-tournament-spacer-div'}/>
                                    <div className={'main-tournament-info-item tournament-rules-div'}>
                                        <a href={tournament.FormatLink}>Rules</a>
                                    </div>
                                </div>
                                <div className={'spacer-div'}/>
                                <div className={'stream-link-div'}>
                                    <a href={tournament.Stream}>
                                        {
                                            // TODO change Stream icon depending on stream URL
                                            tournament.Name === 'HP Omen' ?
                                                <img src={'youtube-white.png'} className={'stream-img'}
                                                     alt={'YT img'}/> :
                                                <img src={'twitch.png'} className={'stream-img'}
                                                     alt={'Twitch img'}/>
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default TournamentsByMonth;