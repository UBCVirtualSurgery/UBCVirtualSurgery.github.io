import React from "react";
import {FixedSizeList as List} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const preventDefault = (event) => event.preventDefault();
const Row = ({index, style}) => (
    <ListItem className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <CardContent>
            <Typography variant='h3'>
                Row {index} <br/>
            </Typography>
            <Link href="#" onClick={preventDefault} color="inherit">
                Link
            </Link>
        </CardContent>
    </ListItem>
);

export default function PublicationList() {
    return (
        <React.Fragment>
            <AutoSizer>
                {({height, width}) => (
                    <List
                        className="List"
                        height={height}
                        itemCount={100}
                        itemSize={100}
                        width={width}
                        style={{overflow: 'auto'}}

                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>
        </React.Fragment>)
}

