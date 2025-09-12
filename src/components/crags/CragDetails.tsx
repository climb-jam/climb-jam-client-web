import Pages from "../../components/layout/Pages";
import type {Crag} from "../../@types/crag.type.ts";

type CragDetailsProps = {
    cragProps: Crag;
}

const CragDetails= ({cragProps}: CragDetailsProps) => {


    return (
        <Pages title={cragProps.name}>

            <p>{cragProps.city}, {cragProps.postalCode}</p>
            <p>Longitude et latitude: {cragProps.lat}, {cragProps.lon}</p>
            <p>Cotation: {cragProps.minGrade} à {cragProps.maxGrade}</p>
            <p>Hauteur: {cragProps.altitude} mètres</p>
            <p>Exposition: {cragProps.exposure}</p>
            <p>Saison favorable: {cragProps.favorableSeasons+" "}</p>
            {/*<ul>
                {
                    cragProps.favorableSeasons.map((season,idx) => {
                        return (<li key={idx}>{season}</li>)
                    })
                }
            </ul>*/}
            <p>Type de roche: {cragProps.rockType}</p>


        </Pages>
    );
};

export default CragDetails;
