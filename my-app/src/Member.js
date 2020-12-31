import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import MediaCard from "./ProfileCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        // marginBottom: "5vmin",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Member() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2} justify={"center"} style={{paddingBottom: '30px'}}>
                <Grid item>
                    <MediaCard name={"Prisman"} title={"Primary Investigator"} image={"unnamed"} descriptor={"Something something big words"} />
                </Grid>
                <Grid item>
                    <MediaCard name={"Someone Else"} title={"Research Assistant"} image={"unnamed"} descriptor={"You can write whatever you want in this spot and it will fit to the card"}/>
                </Grid>
                <Grid item>
                    <MediaCard name={"Someone Else"} title={"Research Assistant"} image={"unnamed"} descriptor={"this is a test of overflow on the card object within the grid"}/>
                </Grid>
                <Grid item>
                    <MediaCard name={"Someone Else"} title={"Research Assistant"} image={"unnamed"} descriptor={"this is a test of overflow on the card object within the grid"}/>
                </Grid>
                <Grid item>
                    <MediaCard name={"Someone Else"} title={"Research Assistant"} image={"unnamed"} descriptor={"this is a test of overflow on the card object within the grid"}/>
                </Grid>
                <Grid item>
                    <MediaCard name={"Someone Else"} title={"Research Assistant"} image={"unnamed"} descriptor={"this is a test of overflow on the card object within the grid"}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
