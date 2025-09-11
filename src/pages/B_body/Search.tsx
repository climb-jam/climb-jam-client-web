import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import LocationMarker from "../../components/map/LocationMarker.tsx";
import {type LatLngTuple} from "leaflet";
import {useEffect, useState} from "react";
import Pages from '../../components/layout/Pages.tsx';
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCrags} from "../../api/crag-api.ts";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import MapPopupCard from "../../components/map/MapPopupCard.tsx";


const Search = () => {
    const [map, setMap] = useState(null)
    const centerOfFrance: LatLngTuple = [46.232193, 2.209667]

    const [crags, setCrags] = useState<Crag[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        fetchCrags()
            .then((crags: Crag[]) => {
                setCrags(crags);
            })
    }, [])

    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
        //convert input text to lower case
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const filteredCrags = crags.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText) || el.city.toLowerCase().includes(inputText)
        }
    })

    return (
        <>
            <Pages title={"Carte"}>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                </div>
                <button className="buttonMap" onClick={() => navigate("/crags")}>Recherche par spots...</button>
                <MapContainer style={{width: "100 %", height: "85vh", zIndex: 0}} center={centerOfFrance} zoom={5}
                              scrollWheelZoom={true} ref={setMap}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {filteredCrags.map((crag, index) => {
                        const latitude = crag.lat;
                        const longitude = crag.lon;

                        return (
                            <div key={index}>
                                <Marker position={[latitude, longitude]}>
                                    <Popup>
                                        <MapPopupCard crag={crag}/>

                                    </Popup>
                                </Marker>
                            </div>
                        )
                    })}
                    <LocationMarker/>
                </MapContainer>
            </Pages>
        </>
    );

};

export default Search;
