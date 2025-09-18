import Pages from "../../components/layout/Pages";
import type {Crag} from "../../@types/crag.type.ts";
import mountainThumbnail from "../../assets/mountain_card.png"
import {FaCanadianMapleLeaf, FaLeaf} from "react-icons/fa";
import {Box} from "@mui/material";
import {IoSnowSharp} from "react-icons/io5";
import {MdWbSunny} from "react-icons/md";

type CragDetailsProps = {
    cragProps: Crag;
}

const CragDetails = ({cragProps}: CragDetailsProps) => {


    return (
        <Pages title={cragProps.name}>
            <Box sx={{border:"1px solid black", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: "100px",maxWidth:375}}>
            <img style={{width: "350px", padding: "10px"}} src={mountainThumbnail} alt="La montagne"/>
            <p>{cragProps.city}, {cragProps.postalCode}</p>
            <p>Longitude et latitude: {cragProps.lat}, {cragProps.lon}</p>
            <p>Cotation: {cragProps.minGrade} à {cragProps.maxGrade}</p>
            <p>Hauteur: {cragProps.altitude} mètres</p>
            <p>Exposition: {cragProps.exposure}</p>
            <p>Saison favorable: </p>
            {
                cragProps.favorableSeasons?.map((season:string, idx: number) => {
                    if (season === "ETE") {
                        return <MdWbSunny key={idx} size={25} color="GoldenRod" title={"été"}/>
                    }
                    if (season === "PRINTEMPS") {
                        return <FaLeaf key={idx} size={25} color="green" title={"printemps"}/>
                    }
                    if (season === "AUTOMNE") {
                        return <FaCanadianMapleLeaf key={idx} size={25} color="darkorange" title={"automne"}/>
                    }
                    if (season === "HIVER") {
                        return <IoSnowSharp key={idx} size={25} color="lightblue" title={"hiver"}/>
                    }
                })
            }
            <p>Type de roche: {cragProps.rockType}</p>
            </Box>
        </Pages>
    );
};

export default CragDetails;
