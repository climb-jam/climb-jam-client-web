import {useEffect, useState} from "react";
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCrags} from "../CragList.ts";

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

                        <p>{crag.lat}</p>

                )
            })}
        </div>
    );
};

export default CragList;
