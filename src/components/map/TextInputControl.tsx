import * as React from "react";
import {useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const TextInputControl = ({}) => {

    const map = useMap();

    React.useEffect(() => {
        const control = L.control({position: "topright"});

        control.onAdd = () => {
            const div = L.DomUtil.create("div", "leaflet-bar leaflet-control");
            const input = L.DomUtil.create("input", "", div);

            input.type = "text";
            input.placeholder = "Type here...";
            input.style.padding = "5px";

            // Prevent map from dragging while typing
            L.DomEvent.disableClickPropagation(div);

            return div;
        };

        control.addTo(map);

        return () => {
            control.remove();
        };
    }, [map]);

    return null;
};

export default TextInputControl;
