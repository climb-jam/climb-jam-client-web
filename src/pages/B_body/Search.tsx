import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import LocationMarker from "../../components/map/LocationMarker.tsx";
import DisplayPosition from "../../components/map/DisplayPosition.tsx";
import {type LatLngTuple, map} from "leaflet";
import {useEffect, useState} from "react";
import TextInputControl from "../../components/map/TextInputControl.tsx";
import Pages from '../../components/layout/Pages.tsx';
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCrags} from "../../api/crag-api.ts";



const Search = () => {
    const [map, setMap] = useState(null)
    const centerOfFrance: LatLngTuple = [46.232193, 2.209667]

    const [crags, setCrags] = useState<Crag[]>([])


    useEffect(() => {
        fetchCrags()
            .then((crags: Crag[]) => {
                setCrags(crags);
            })
    }, [])

    return (
        <>
            <Pages title={"Carte"}>
                {map ? <DisplayPosition map={map}/> : null}
                <MapContainer style={{width: "100 %", height: "85vh", zIndex: 0}} center={centerOfFrance} zoom={5}
                              scrollWheelZoom={true} ref={setMap}>
                    <TextInputControl/>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {crags.map((crag,index) => {
                        const latitude= crag.lat;
                        const longitude = crag.lon;

                        return (
                            <div key={index}>
                                <Marker position={[latitude, longitude]}>
                                    <Popup>


                                        <p>{crag.city}, {crag.postalCode}, {crag.name}</p>
                                        <p>lat: {crag.lat}, long: {crag.lon}</p>
                                        <p>cotation: {crag.minGrade}-{crag.maxGrade}</p>


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
