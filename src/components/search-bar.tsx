import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const searchBarStyle = makeStyles(() => ({
    root: {
        width: "400px",
        borderRadius: "0.25rem",
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#6e6e6e80"
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
        <div id="search-div" style={{ borderRadius: "0.25rem" }}>
            <TextField
                onChange={onChange}
                variant="outlined"
                placeholder="Search"
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
        </div>
    )
}