import {Box} from "@mui/material";
import type {ReactNode} from "react";

type PageProps = {
    children: ReactNode;
    title: string;
}

const Pages = ({children, title}: PageProps) => {

    return (

        <Box ml="60px" mr="60px" mt="120px">
            <title>{title}</title>
            {children}
        </Box>


    );
};

export default Pages;
