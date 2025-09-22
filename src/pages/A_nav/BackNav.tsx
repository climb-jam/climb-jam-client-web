import {useNavigate} from "react-router";
import Tooltip from '@mui/material/Tooltip';
import {IconButton, Paper, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type backNavTextProps = {
    backNavText: string;
}

const BackNav = ({backNavText}: backNavTextProps) => {
    const navigate = useNavigate();

    return (
        <>
            <Paper
                sx={{position: "fixed", left:0,top: 0, zIndex: 200,width: '100%'}}
                elevation={3}
            >
            <Tooltip title="Précédent"  >
                <IconButton onClick={() => navigate(-1)} sx={{

                    width: "100%",
                    borderRadius: 0,
                    justifyContent: "flex-start",


                    mb: "5px"

                }}>
                    <ArrowBackIcon color="primary"></ArrowBackIcon> <Typography color="primary" ml={"20px"} sx={{fontSize: "20px"}}>{backNavText}</Typography>

                </IconButton>
            </Tooltip>
            </Paper>
        </>
    );
};

export default BackNav;
