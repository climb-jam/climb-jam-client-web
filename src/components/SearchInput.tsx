import {TextField} from "@mui/material";

interface SearchInputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
}

const SearchInput = ({label = "Search", value, onChange}: SearchInputProps) => {
    return (
        <div style={{width: "100%", marginBottom: "10px"}}>
        <TextField
            variant="outlined"
            fullWidth
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        </div>
    );
};

export default SearchInput;
