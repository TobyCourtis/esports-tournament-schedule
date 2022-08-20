import React from 'react';
import {IPlayer} from "../../types/PlayerTypes";
import {Grid} from '@material-ui/core';
import Player from './Player';
import './Player.css'

interface IProps {
    players: IPlayer[]
}



function PlayersGrid({players}: IProps) {

    const featuredPlayers = ["TOBYC", "Aydan", "Rated"]

    return (
        <div className={'players-table-outer-div'}>
            <div className={'players-table-inner-div'}>
                <h1 className={'headings'}>Featured</h1>
                {/* TODO refactor into component to use twice */}
                <Grid container spacing={3} zeroMinWidth>
                    {
                        players
                            .filter(p => featuredPlayers.includes(p.GamerTag))
                            .map((player: IPlayer) => (<Player {...player}/>))
                    }
                </Grid>
                <h1 className={'headings'}>All</h1>
                <Grid container spacing={3} zeroMinWidth>
                    {
                        players.map((player: IPlayer) => (<Player {...player}/>))
                    }
                </Grid>
            </div>
        </div>
    );
}

export default PlayersGrid;