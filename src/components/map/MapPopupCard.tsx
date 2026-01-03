import thumbnailPopup from "../../assets/mountain_thumbnail.webp"
import type {Crag} from "../../@types/crag.type.ts";
import {useNavigate} from "react-router";

type CragProps = {
    crag: Crag;
}

const MapPopupCard = ({crag}: CragProps) => {
    const navigate = useNavigate();

    return (
        <>
            <img src={thumbnailPopup} alt="Montagne"/>
            <p>{crag.name}</p>
            <p>{crag.city}, {crag.postalCode}</p>
            <p>cotation: {crag.minGrade}-{crag.maxGrade}</p>
            <button style={{marginLeft: "110px", left: "0"}} onClick={() => navigate(`/crags/${crag.id}`)}>Details...
            </button>
        </>
    );
};

export default MapPopupCard;
