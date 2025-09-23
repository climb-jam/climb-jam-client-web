import Pages from "../../components/layout/Pages";
import type {Crag} from "../../@types/crag.type.ts";
import mountainThumbnail from "../../assets/mountain_card.png"
import {FaCanadianMapleLeaf, FaLeaf} from "react-icons/fa";
import {Box} from "@mui/material";
import {IoSnowSharp} from "react-icons/io5";
import {MdWbSunny} from "react-icons/md";
import {PiCompassRoseDuotone} from "react-icons/pi";
import {MdNorth} from "react-icons/md";
import {MdOutlineSouth} from "react-icons/md";
import {MdOutlineWest} from "react-icons/md";
import {MdNorthEast} from "react-icons/md";
import {MdNorthWest} from "react-icons/md";
import {MdSouthEast} from "react-icons/md";
import {MdOutlineSouthWest} from "react-icons/md";
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
                                return <FaCanadianMapleLeaf style={{marginLeft: "4px", marginTop: "4px"}} size={30} color="darkorange"
                                                            title={"automne"}/>
                            }
                            if (season === "HIVER") {
                                return <IoSnowSharp style={{marginLeft: "4px", marginTop: "4px"}} size={30} color="lightblue"
                                                    title={"hiver"}/>
                            }
                        })
                    }</Box>


                <Box mt={"15px"} minHeight={"230px"} >🧭 Orientation(s):
                    {
                        !!cragProps.orientations &&
                        cragProps.orientations.map((orient: string, idx: number) => {

                            if (orient === "TOUTES") {
                                return <div><PiCompassRoseDuotone style={{margin: "4px"}} size={30}
                                                             title={"Toutes"}/>Toutes</div>
                            }
                            if (orient === "NORD") {
                                return <div><MdNorth style={{margin: "4px"}} size={30}
                                                             title={"Nord"}/>Nord</div>
                            }
                            if (orient === "SUD") {
                                return <div><MdOutlineSouth style={{margin: "4px"}} size={30}
                                                                title={"Sud"}/>Sud</div>
                            }
                            if (orient === "OUEST") {
                                return <div><MdOutlineWest style={{margin: "4px"}} size={30}
                                                                 title={"Ouest"}/>Ouest</div>
                            }
                            if (orient === "NORD_EST") {
                                return <div><MdNorthEast style={{margin: "4px"}} size={30}
                                                                  title={"Nord-Est"}/>nord-Est</div>
                            }
                            if (orient === "NORD_OUEST") {
                                return <div><MdNorthWest style={{margin: "4px"}} size={30}
                                                                    title={"Nord-Ouest"}/>Nord-Ouest</div>
                            }
                            if (orient === "SUD_EST") {
                                return <div><MdSouthEast style={{margin: "4px"}} size={30}
                                                             title={"Sud-Rst"}/>Sud-Est</div>
                            }
                            if (orient === "SUD_OUEST") {
                                return <div><MdOutlineSouthWest style={{margin: "4px"}} size={30}
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
