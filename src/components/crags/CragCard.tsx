import type {Crag} from "../../@types/crag.type.ts";


type CragCardProps = {
    crag: Crag
}
const CragCard: React.FC<CragCardProps> = ({crag}) => {
    console.log(crag);
    return (
        <div>
            <p>{crag.city}, {crag.postalCode}</p>
            <p>lat: {crag.lat}</p>
            <p>long: {crag.lon}</p>
        </div>
    );
};

export default CragCard;
