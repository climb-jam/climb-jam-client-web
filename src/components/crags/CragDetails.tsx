import {useEffect, useState} from "react";
import Pages from "../../components/layout/Pages";
import {useParams} from "react-router";
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCragById} from "../../api/crag-api.ts";

const CragDetails = () => {
    const {id} = useParams();
    const [crag, setCrag] = useState<Crag>({} as Crag)

    useEffect(() => {
        if (id) {
            fetchCragById(id)
                .then((crag: Crag) => {
                    setCrag(crag);
                })
        }
    }, [id]);


    return (
        <Pages title={"Le spot"}>
            <p>{id}</p>
            <p>{crag.name}</p>
            {/*<CragCard crag={crag}/>
            <CragList crag={crag}/>*/}
        </Pages>
    );
};

export default CragDetails;
