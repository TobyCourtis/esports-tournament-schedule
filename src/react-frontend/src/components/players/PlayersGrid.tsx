import React from 'react';
import {IPlayer} from "../../types/PlayerTypes";
import {Grid} from '@material-ui/core';
import Player from './Player';
import './Player.css'

interface IProps {
    players: IPlayer[]
}



function PlayersGrid({players}: IProps) {

    return (
        <div className={'players-table-outer-div'}>
            <div className={'players-table-inner-div'}>
                <Grid container spacing={3} zeroMinWidth>
                    {
                        players.map((player: IPlayer) => (
                        <Grid item xs={4} spacing={3} md={4} className={"player-grid-item"}>
                            <Player {...player}/>
                        </Grid>))
                    }
                </Grid>
            </div>
        </div>
    );
}

export default PlayersGrid;