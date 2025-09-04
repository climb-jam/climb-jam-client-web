import {useCallback, useEffect, useState} from "react";
import {type LatLngTuple} from "leaflet";

const centerOfFrance: LatLngTuple = [46.232193, 2.209667]
const zoom = 5

const DisplayPosition = ({map}:any) => {
    const [position, setPosition] = useState(() => map.getCenter())

    const onClick = useCallback(() => {
        map.setView(centerOfFrance, zoom)
    }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])
    return (
        <p style={{height:'50px'}}>
            latitude: {position.lat.toFixed(3)}, longitude: {position.lng.toFixed(3)}{' '}
            <button onClick={onClick}>reset</button>
        </p>
    );
};

export default DisplayPosition;
