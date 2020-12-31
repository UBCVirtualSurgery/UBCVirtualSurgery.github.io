import React from 'react';
import Typography from "@material-ui/core/Typography";

export default function About() {
    return(
        <React.Fragment>
            <Typography style={{backgroundColor: "lightgrey"}}>
                Location: <br/>
                Gordon & Leslie Diamond Health Care Centre<br/>
                4th Floor- 2775 Laurel Street<br/>
                Vancouver, BC,  V5Z 1M9
            </Typography>
        </React.Fragment>
    )
}