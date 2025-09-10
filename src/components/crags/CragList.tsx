import {useEffect, useState} from "react";
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCrags} from "../../api/crag-api.ts";

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
                        <p>{crag.city}{crag.name}{crag.postalCode}</p>
                        <p>lat: {crag.lat}</p>
                        <p>long: {crag.lon}</p>
                    </>
                )
            })}
        </div>
    );
};

export default CragList;
