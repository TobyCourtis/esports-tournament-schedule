import {IPlayer} from "../../types/PlayerTypes";
import './Player.css'

export default function Player(player: IPlayer) {
    return (
        <div className={'player-outer-div'}>
            <div className={'player-inner-div'}>
                <img src={'https://www.tobycourtis.com/wp-content/uploads/2020/02/Picture-Circle.png'}
                     className={'player-image'} alt={'player'}/>
                <p>{player.FirstName}</p>
                <p>{player.Organisation} - {player.Earnings}</p>
            </div>
        </div>
    );
}