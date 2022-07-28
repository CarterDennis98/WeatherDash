import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from "@mui/material/IconButton";
import BookmarkedLocation from "./bookmarked-location";
import SearchBar from "./search-bar";

const testLocations = [
    {
        city: "Oklahoma City",
        state: "OK",
        lat: 35.481918,
        long: -97.508469
    },
    {
        city: "Tulsa",
        state: "OK",
        lat: 36.153980,
        long: -95.992775
    }
]

export default function Header(props: any) {
    return (
        <div style={{
            height: "25%", width: "100%", backgroundColor: "#2b2b2b", boxShadow: "0px 5px 10px #151515", display: "flex", justifyContent: "space-between",
            boxSizing: "border-box", padding: "10px", alignItems: "center"
        }}>
            <div>
                <SearchBar
                    userCoords={props.userCoords}
                    setCoords={props.setCoords}
                />
            </div>
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
                { testLocations.length > 0 ? 
                    testLocations.map((location: any, index: number) => {
                        return (
                            <BookmarkedLocation
                                location={location}
                                last={index === testLocations.length - 1}
                                setCoords={props.setCoords}
                                key={index}
                            />
                        );
                    }) : 
                    null
                }
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
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