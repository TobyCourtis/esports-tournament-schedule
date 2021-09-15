import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ITournament} from '../types/TournamentTypes';
import './TournamentTable.css'

interface IProps {
    tournaments: ITournament[]
}

function TournamentsTable(props: IProps) {

    return (
        <div>
            {
                props.tournaments.map((tournament) => (
                    <div id='tournaments-div'>
                        <div className='tournament-date-heading'>
                            <p className='tournament-date'>{tournament.Date.toLocaleString().substring(0, 12)}</p>
                        </div>
                        <div className='tournament-data'>
                            <p className='tournament-data-item'>{tournament.Name}</p>
                            <p className='tournament-data-item'>{tournament.PrizePool}</p>
                            <p className='tournament-data-item'>{tournament.Stream}</p>
                            <a className='tournament-data-item' href={tournament.FormatLink}>
                                {tournament.FormatName}
                            </a>
                        </div>
                        <hr className='hr-solid'/>
                    </div>))
            }
        </div>
    );
}

export default TournamentsTable;