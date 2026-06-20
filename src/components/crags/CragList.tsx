import {useEffect, useState} from "react";
import type {Crag} from "../../@types/crag.type.ts";
import {searchCragsByName} from "../../api/crag-api.ts";
import CragCard from "./CragCard.tsx";
import {Box, Pagination} from "@mui/material";
import BackNav from "../../pages/A_nav/BackNav.tsx";
import SearchInput from "./SearchInput.tsx";

export type PageResponse<T> = {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    last: boolean;
};

const CragList = () => {

    const styles = {
        container: {
            display: "flex",
            mx: "auto",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            mt: 5,
        },
        paginationContainer: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 3,
        },
    };

    const [crags, setCrags] = useState<Crag[]>([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const loadCrags = async () => {
            try {
                const result: PageResponse<Crag> =
                    await searchCragsByName(search, page, 10);

                setCrags(result.content);
                setTotalPages(result.totalPages);
            } catch (error) {
                console.error(error);
            }
        };

        loadCrags();
    }, [search, page]);

    return (
        <Box
            sx={styles.container}
        >
            <BackNav backNavText="Carte"/>
            <SearchInput
                value={search}
                onChange={(value) => {
                    setSearch(value);
                    setPage(0);
                }}
            />
            {crags.map((crag) => (
                <CragCard key={crag.id} crag={crag}/>
            ))}
            <Box
                sx={styles.paginationContainer}
            >
                <Pagination
                    count={totalPages}
                    page={page + 1}
                    onChange={(_, value) => setPage(value - 1)}
                />
            </Box>
        </Box>
    );
};

export default CragList;