import {IPlayer} from "../../types/PlayerTypes";
import {Grid} from '@material-ui/core';
import './Player.css'
import arrow from './arrow.png';
import playerPic from './aydan.png';
import orgPic from './faze.png';
import {useHistory} from "react-router-dom";

function calculateFontSize(displayText: string) {
    let fontSize;
    let textLen = displayText.length;
    switch (true) {
        case (textLen < 21):
            fontSize = 1.3
            break;
        case (textLen < 30):
            fontSize = 1.1
            break;
        default:
            fontSize = 0.9
    }
    return fontSize + "em";
}

export default function Player(player: IPlayer) {

    let style = {
        fontSize: "1.3em"
    }
    let displayText = player.FirstName + player.GamerTag + player.Surname;
    style.fontSize = calculateFontSize(displayText);

    const history = useHistory();

    const redirect = (gamertag: string = "") => {
        history.push("/gamertag/" + gamertag);
    }

    return (
        <Grid item xs={4} spacing={3} md={4} id={"player-grid-item"}>
            <div className={'player-outer-div'}>
                <div className={'player-inner-div'}>
                    <p style={style} id={'firstname'}>{player.FirstName}</p>
                    <p style={style} id={'gamertag'}>{'"' + player.GamerTag + '" '}</p>
                    <p style={style} id={'surname'}>{player.Surname}</p>
                    <p id={'arrow-img'} onClick={() => redirect(player.GamerTag)}>
                            <img className={'arrow-img'} src={arrow} alt={'arrow-img'}/>
                    </p>
                </div>
                <div className={'overlay-div'}>
                    <img src={'https://d21is3bk1bus90.cloudfront.net/images/roster-player-card-bg.png'}
                         className={'overlay-image'} alt={'overlay'}/>
                </div>
                {/*TODO change to player.Image and org.image when data is final */}
                <img src={orgPic} className={'org-picture'} alt={'org-picture'}/>
                <img src={playerPic} className={'profile-picture'} alt={'profile-picture'}/>
            </div>
        </Grid>
    );
}