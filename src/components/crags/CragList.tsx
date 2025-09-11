import {useEffect, useState} from "react";
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCrags} from "../../api/crag-api.ts";
import CragCard from "./CragCard.tsx";
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";

const CragList = () => {

    const [crags, setCrags] = useState<Crag[]>([])

    useEffect(() => {
        fetchCrags()
            .then((crags: Crag[]) => {
                setCrags(crags);
            })
    }, [])

    const [inputText, setInputText] = useState("");
    const inputHandler = (e) => {
        //convert input text to lower case
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const filteredCrags = crags.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText) || el.city.toLowerCase().includes(inputText)
        }
    })
    return (
        <div style={{ display:"flex" ,margin: "0 auto", width: "100%", flexWrap: "wrap",alignContent: "center" }}>
            <div style={{ width: "100%" }}>
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"

                />
            </div>
            {filteredCrags.map((crag: Crag, idx: number) => {
                return (
                    <>
                        <CragCard crag={crag} key={idx}/>
                    </>
                )
            })}
        </div>
    );
};

export default CragList;
