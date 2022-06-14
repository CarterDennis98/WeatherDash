import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const searchBarStyle = makeStyles(() => ({
    root: {
        width: "400px",
        borderRadius: "rem",
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#4a4a4a",
            borderRadius: "2rem"
        },
        "& .MuiOutlinedInput-input": {
            color: "white"
        }
    }
}));

export default function SearchBar(props: any) {
    const searchBarClasses = searchBarStyle();

    const onChange = (event: any) => {

    }

    return (
        <TextField
            onChange={onChange}
            variant="outlined"
            placeholder="Search"
            size="small"
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    {
                        <IconButton onClick={() => console.log("search")} sx={{ color: "white" }}>
                            <SearchIcon />
                        </IconButton>
                    }
                </InputAdornment>
            }}
            className={searchBarClasses.root}
        />
    )
}