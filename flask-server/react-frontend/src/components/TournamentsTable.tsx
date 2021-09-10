import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {ITournament} from '../types/TournamentTypes';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

interface IProps {
    tournaments: ITournament[]
}

function TournamentsTable(props: IProps) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Prize Pool</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Stream</TableCell>
                        <TableCell align="right">FormatName</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tournaments.length > 0 ? props.tournaments.map((tournament) => (
                        <TableRow key={tournament.Name}>
                            <TableCell component="th" scope="row">{tournament.Name}</TableCell>
                            <TableCell align="right">{tournament.PrizePool}</TableCell>
                            <TableCell align="right">{tournament.Date}</TableCell>
                            <TableCell align="right">{tournament.Stream}</TableCell>
                            <TableCell align="right">{tournament.FormatName}</TableCell>
                        </TableRow>)) : <p>Was still called with []</p>}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TournamentsTable;