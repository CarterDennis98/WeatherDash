import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from "@mui/material/IconButton";
import SearchBar from "./search-bar";

export default function Header(props: any) {
    return (
        <div style={{
            height: "25%", width: "100%", backgroundColor: "#2b2b2b", boxShadow: "0px 5px 10px #151515", display: "flex", justifyContent: "space-between",
            boxSizing: "border-box", padding: "10px", alignItems: "center"
        }}>
            <div>
                <SearchBar />
            </div>
            <div>
                <IconButton sx={{ color: "white" }} onClick={() => window.open("https://github.com/CarterDennis98", "_blank")}>
                    <GitHubIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }} onClick={() => window.open("https://www.linkedin.com/in/carter-dennis-893a38227/", "_blank")}>
                    <LinkedInIcon />
                </IconButton>
            </div>
        </div>
    )
}