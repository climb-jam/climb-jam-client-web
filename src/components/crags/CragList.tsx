import {useState, useEffect} from "react";
import type {Crag} from "../../@types/crag.type";
import {fetchCragsPaginated, fetchCragsByNamePaginated} from "../../api/crag-api";
import CragCard from "./CragCard";
import BackNav from "../../pages/A_nav/BackNav";
import SearchInput from "../SearchInput.tsx";

const ITEMS_PER_PAGE = 6;

const CragList = () => {
    const [crags, setCrags] = useState<Crag[]>([]);
    const [inputText, setInputText] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const loadPage = async (page: number, name?: string) => {
        let data;
        if (name && name.trim() !== "") {
            data = await fetchCragsByNamePaginated(name, page, ITEMS_PER_PAGE);
        } else {
            data = await fetchCragsPaginated(page, ITEMS_PER_PAGE);
        }

        setCrags(data.content);
        setTotalPages(data.totalPages);
        setCurrentPage(page);
    };

    // Charger la première page au montage et à chaque changement de recherche
    useEffect(() => {
        loadPage(0, inputText);
    }, [inputText]);

    return (
        <div style={{
            display: "flex",
            margin: "0 auto",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "38px"
        }}>
            <BackNav backNavText={"Carte"}/>
            <SearchInput value={inputText} onChange={setInputText}/>

            {crags.map((crag: Crag) => (
                <CragCard crag={crag} key={crag.id}/>
            ))}

            {/* Pagination */}
            <div style={{marginTop: "20px", width: "100%", textAlign: "center",marginBottom: "50px"}}>
                <button disabled={currentPage === 0} onClick={() => loadPage(currentPage - 1, inputText)}>
                    ← Précédent
                </button>
                <span style={{margin: "0 10px"}}>
          {currentPage + 1} / {totalPages}
        </span>
                <button disabled={currentPage + 1 === totalPages} onClick={() => loadPage(currentPage + 1, inputText)}>
                    Suivant →
                </button>
            </div>
        </div>
    );
};

export default CragList;
