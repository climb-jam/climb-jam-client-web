import Pages from "../../components/layout/Pages";
import type {Crag} from "../../@types/crag.type.ts";
import mountainThumbnail from "../../assets/mountain_card.webp"
import {FaCanadianMapleLeaf, FaLeaf} from "react-icons/fa";
import {Box} from "@mui/material";
import {IoSnowSharp} from "react-icons/io5";
import {
    MdNorth,
    MdNorthEast,
    MdNorthWest,
    MdOutlineSouth,
    MdOutlineSouthWest,
    MdOutlineWest,
    MdSouthEast,
    MdWbSunny
} from "react-icons/md";
import {PiCompassRoseDuotone} from "react-icons/pi";

type CragDetailsProps = {
    cragProps: Crag;
}

const CragDetails = ({cragProps}: CragDetailsProps) => {

    return (
        <Pages title={cragProps.name}>

            <Box sx={{maxWidth: "1250px", textAlign: "left", fontSize: "18px", textWrapStyle: "pretty",height:"200px"}}>
                <img style={{width: "100%", paddingTop: "10px", height: "190px"}} src={mountainThumbnail}
                     alt="La montagne"/>
                <p>📍 {cragProps.city}, {cragProps.postalCode}</p>

                <p>🧗Cotation: {cragProps.minGrade} à {cragProps.maxGrade}</p>
                <p>📏 Hauteur: {cragProps.altitude} mètres</p>
                <p>🌳 Exposition: {cragProps.exposure}</p>
                <p>🪨 Type de roche: {cragProps.rockType}</p>
                <Box>📆 Saison(s) favorable(s):</Box>
                <Box sx={{textAlign:"center"}}>
                    {
                        cragProps.favorableSeasons?.map((season: string, idx: number) => {
                            if (season === "ETE") {
                                return <MdWbSunny style={{marginLeft: "4px", marginTop:"4px"}} key={idx} size={30} color="GoldenRod"
                                                  title={"été"}/>
                            }
                            if (season === "PRINTEMPS") {
                                return <FaLeaf style={{marginLeft: "4px", marginTop: "4px"}} key={idx} size={30} color="green"
                                               title={"printemps"}/>
                            }
                            if (season === "AUTOMNE") {
                                return <FaCanadianMapleLeaf style={{marginLeft: "4px", marginTop: "4px"}} key={idx} size={30} color="darkorange"
                                                            title={"automne"}/>
                            }
                            if (season === "HIVER") {
                                return <IoSnowSharp style={{marginLeft: "4px", marginTop: "4px"}} key={idx} size={30} color="lightblue"
                                                    title={"hiver"}/>
                            }
                        })
                    }</Box>


                <Box mt={"15px"} minHeight={"230px"} >🧭 Orientation(s):
                    {
                        !!cragProps.orientations &&
                        cragProps.orientations.map((orient: string) => {

                            if (orient === "TOUTES") {
                                return <div key={orient} ><PiCompassRoseDuotone style={{margin: "4px"}} size={30}
                                                             title={"Toutes"}/>Toutes</div>
                            }
                            if (orient === "NORD") {
                                return <div key={orient} ><MdNorth style={{margin: "4px"}} size={30}
                                                             title={"Nord"}/>Nord</div>
                            }
                            if (orient === "SUD") {
                                return <div key={orient} ><MdOutlineSouth style={{margin: "4px"}} size={30}
                                                                title={"Sud"}/>Sud</div>
                            }
                            if (orient === "OUEST") {
                                return <div key={orient} ><MdOutlineWest style={{margin: "4px"}} size={30}
                                                                 title={"Ouest"}/>Ouest</div>
                            }
                            if (orient === "NORD_EST") {
                                return <div key={orient} ><MdNorthEast style={{margin: "4px"}} size={30}
                                                                  title={"Nord-Est"}/>nord-Est</div>
                            }
                            if (orient === "NORD_OUEST") {
                                return <div key={orient}><MdNorthWest style={{margin: "4px"}} size={30}
                                                                    title={"Nord-Ouest"}/>Nord-Ouest</div>
                            }
                            if (orient === "SUD_EST") {
                                return <div key = {orient}><MdSouthEast style={{margin: "4px"}}  size={30}
                                                             title={"Sud-Rst"}/>Sud-Est</div>
                            }
                            if (orient === "SUD_OUEST") {
                                return <div key={orient}><MdOutlineSouthWest style={{margin: "4px"}}  size={30}
                                                             title={"Sud-Ouest"}/> Sud-Ouest</div>
                            }
                        })
                    }
                </Box>
            </Box>
        </Pages>
    );
};

export default CragDetails;
