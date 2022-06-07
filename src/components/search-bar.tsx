import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar(props: any) {
    const onChange = (event: any) => {
        
    }

    return (
        <TextField
            onChange={onChange}
            variant="outlined"
            placeholder="Search"
            InputProps={{
                endAdornment: <SearchIcon sx={{ color: "white" }} />
            }}
            sx={{ marginLeft: "20px", width: "50%" }}
        />
    )
}