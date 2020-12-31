import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function TabsWrappedLabel() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2} justify={"center"} style={{paddingBottom: '30px'}}>
                <Grid item>
                    <ProjectCard/>
                </Grid>
                <Grid item>
                    <ProjectCard/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}