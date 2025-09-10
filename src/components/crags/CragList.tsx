import {useEffect, useState} from "react";
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCrags} from "../../api/crag-api.ts";
import { Link } from "react-router";

const CragList = () => {

    const [crags, setCrags] = useState<Crag[]>([])

    useEffect(() => {
        fetchCrags()
            .then((crags: Crag[]) => {
                setCrags(crags);
            })
    }, [])

    return (
        <div>

            {crags.map((crag) => {
                return (
                    <>
                        <p>{crag.city}, {crag.postalCode}</p>
                        <p>lat: {crag.lat}</p>
                        <p>long: {crag.lon}</p>
                        <Link to={`/crags/${crag.id}`}>{crag.name}</Link>
                    </>
                )
            })}
        </div>
    );
};

export default CragList;
