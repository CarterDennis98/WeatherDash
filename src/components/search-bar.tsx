import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function SearchBar(props: any) {
    const onChange = (event: any) => {

    }

    return (
        <div id="search-div" style={{ borderRadius: "0.25rem" }}>
            <TextField
                onChange={onChange}
                variant="outlined"
                placeholder="Search"
                InputProps={{
                    endAdornment: <SearchIcon sx={{ color: "white" }} />
                }}
                sx={{width: "400px", backgroundColor: "#6e6e6e80", borderRadius: "0.25rem"}}
            />
        </div>
    )
}