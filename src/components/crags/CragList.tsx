import {useEffect, useState} from "react";
import type {Crag} from "../../@types/crag.type.ts";
import {fetchCrags} from "../../api/crag-api.ts";
import CragCard from "./CragCard.tsx";
import {TextField} from "@mui/material";
import BackNav from "../../pages/A_nav/BackNav.tsx";
import type {FavoriteCrag} from "../../@types/favoriteCrag.type.ts";

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
        <div style={{ display:"flex" ,margin: "0 auto", width: "100%", flexWrap: "wrap",alignContent: "center",justifyContent:"center" ,marginTop:"38px"}}>
            <BackNav backNavText={"Carte"}/>
            <div style={{ width: "100%",marginBottom: "10px" }}>
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"

                />
            </div>
            {filteredCrags.map((crag: Crag) => {
                return (

                        <CragCard crag={crag} key={crag.id}/>

                )
            })}
        </div>
    );
};

export default CragList;
