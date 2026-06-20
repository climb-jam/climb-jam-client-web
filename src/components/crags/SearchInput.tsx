import {TextField} from "@mui/material";

type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
};

const SearchInput = ({value, onChange}: SearchInputProps) => {
    return (
        <div style={{width: "100%", marginBottom: "10px"}}>
        <TextField
            fullWidth
            label="Rechercher un spot"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        </div>
    );
};

export default SearchInput;