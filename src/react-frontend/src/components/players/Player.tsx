import {IPlayer} from "../../types/PlayerTypes";
import {Grid} from '@material-ui/core';
import './Player.css'
import arrow from './arrow.png';

export default function Player(player: IPlayer) {
    return (
        <Grid item xs={4} spacing={3} md={4} className={"player-grid-item"}>
            <div className={'player-outer-div'}>
                <div className={'player-inner-div'}>
                    <h3>{player.FirstName}</h3>
                    <p><img className={'arrow-img'} src={arrow} alt={'arrow-img'}/></p>
                </div>
                <div className={'overlay-div'}>
                    <img src={'https://d21is3bk1bus90.cloudfront.net/images/roster-player-card-bg.png'}
                         className={'overlay-image'} alt={'overlay'}/>
                </div>
            </div>
        </Grid>
    );
}