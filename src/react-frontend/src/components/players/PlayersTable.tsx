import React from 'react';
import {IPlayer} from "../../types/PlayerTypes";

interface IProps {
    players: IPlayer[]
}

function PlayersTable({players}: IProps) {

    return (
        <div className={'players-table-div'}>
            {
                players.map((player) => (
                    <div key={'player-' + player.ID + 'div'}>
                        <p>{player.ID}</p>
                        <p>{player.FirstName}</p>
                        <p>{player.Surname}</p>
                        <p>{player.GamerTag}</p>
                        <p>{player.DOB}</p>
                        <p>{player.Organisation}</p>
                        <p>{player.OrganisationLink}</p>
                        <p>{player.Stream}</p>
                        <p>{player.Image}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default PlayersTable;