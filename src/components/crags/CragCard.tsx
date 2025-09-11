import type {Crag} from "../../@types/crag.type.ts";
import montainCardThumbnail from "../../assets/mountain_card.png"
import {useNavigate} from "react-router";
import {type CSSProperties, useState} from "react";

type CragCardProps = {
    crag: Crag
}
const CragCard: React.FC<CragCardProps> = ({crag}) => {

    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const cardCragStyles: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px auto",
        padding: "10px",
        border: "1px solid black",
        width: "300px",
        borderRadius: "20px",
        cursor: 'pointer',
        backgroundColor: isHovered ? '#12C905' : '#ded7d7',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        zIndex: isHovered ? 2 : 1,
        transition: 'all 0.2s ease'
    }

    return (
        <div style={cardCragStyles} onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)} onClick={() => navigate(`/crags/${crag.id}`)}>
            <img src={montainCardThumbnail} style={{width: "250px"}} alt="La montagne"/>
            <p>{crag.city}, {crag.postalCode}</p>
            <p>{crag.name}</p>
            <p>{crag.minGrade} à {crag.maxGrade}</p>
        </div>
    );

};

export default CragCard;
