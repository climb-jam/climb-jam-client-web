import {Box} from "@mui/material";
import type {CSSProperties} from "react";

type ItemProps = {
    routes: string,
    border: string
}

const RouteItem = ({routes, border}: ItemProps) => {

    const styles: CSSProperties = {
        height: "48px",
        width: "48px",
        padding: "10px",
        border: `2px solid ` + border,
        borderRadius: "50%"
    }

    return (
        <Box sx={styles}>{routes}</Box>
    );

};
export default RouteItem;
