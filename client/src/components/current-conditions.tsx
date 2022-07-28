import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import * as React from "react";
import Alert from './alert';

enum SeverityColor {
    Extreme = "800000",
    Severe = "red",
    Moderate = "orange",
    Minor = "yellow",
    Unknown = "white"
}

enum SeverityName {
    Extreme = "Extreme",
    Severe = "Severe",
    Moderate = "Moderate",
    Minor = "Minor",
    Unknown = "Unknown"
}

function degToCompass(deg: number) {
    var val = Math.floor((deg / 22.5) + 0.5);
    var dirs = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return (dirs[(val % 16)]);
}

function getColor(alerts: Array<any>) {
    let severities = alerts.map((alert: any) => alert.properties.severity).filter((value, index, self) => self.indexOf(value) === index);

    const severityOrder = Object.values(SeverityName);
    severities = severities.sort((a, b) => severityOrder.indexOf(a) - severityOrder.indexOf(b));

    return ((SeverityColor as any)[severities[0]]);
}

export default function CurrentConditions(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }

    const open = Boolean(anchorEl);
    const popperId = open ? "alert-popper" : undefined;

    return props.forecast && props.conditions ? (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", minWidth: "500px", alignItems: "center" }}>
            <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                <img src={props.forecast ? props.forecast.properties.periods[0].icon : ""} alt=""></img>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <p style={{ color: "white", fontSize: "x-large", margin: "0", marginLeft: "5px", fontWeight: "500" }}>
                        {props.conditions && props.location ? (props.location.city ? (props.location.city + ", " + props.location.state) :
                            props.conditions.name + ", " + props.location.state) : ""}
                    </p>
                    {props.alerts && props.alerts.length > 0 ?
                        <React.Fragment>
                            <Tooltip title={open ? "Close" : "View Active Alerts"} placement="right" TransitionComponent={Zoom}>
                                <IconButton onClick={handleClick} sx={{ padding: "0px", marginLeft: "5px" }} disableRipple>
                                    {!open ?
                                        <ErrorOutlineIcon
                                            sx={{
                                                color: getColor(props.alerts)
                                            }} /> :
                                        <ExpandLessIcon
                                            sx={{
                                                color: getColor(props.alerts)
                                            }} />
                                    }
                                </IconButton>
                            </Tooltip>
                            <Popper id={popperId} open={open} anchorEl={anchorEl} transition>
                                {({ TransitionProps }) => (
                                    <Grow {...TransitionProps} timeout={200}>
                                        <div style={{ padding: "5px", backgroundColor: "#4c4c4c", borderRadius: "4px" }}>
                                            <div
                                                id="alert-popper"
                                                style={{
                                                    overflow: "auto",
                                                    maxHeight: "300px",
                                                    maxWidth: "300px",
                                                    backgroundColor: "#4c4c4c",
                                                    borderRadius: "4px"
                                                }}>
                                                {props.alerts.map((alert: any, index: number) => {
                                                    return (
                                                        <Alert
                                                            id={alert.id}
                                                            last={index === props.alerts.length - 1}
                                                            key={index}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </Grow>
                                )}
                            </Popper>
                        </React.Fragment> : null
                    }
                    <Tooltip title={"Bookmarks coming soon!"} placement="right">
                        <IconButton onClick={() => { }} sx={{ color: "white" }} disableRipple>
                            <BookmarkBorderIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "5px" }}>
                        <p style={{ color: "white", margin: 0, fontWeight: "500" }}>
                            {props.conditions ? props.conditions.weather[0].main : ""}
                        </p>
                        <p style={{ color: "white", margin: 0, height: "100%", fontSize: "30px" }}>
                            {props.conditions ? props.conditions.main.temp + "\u00B0F" : ""}
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", height: "100%", marginLeft: "15px" }}>
                        <p style={{ color: "white", margin: "0" }}>
                            {"Feels Like: "}
                            <b style={{ fontWeight: "500" }}>{props.conditions ? props.conditions.main.feels_like + "\u00B0F" : ""}</b>
                        </p>
                        <p style={{ color: "white", margin: "0" }}>
                            {"Humidity: "}
                            <b style={{ fontWeight: "500" }}>{props.conditions ? props.conditions.main.humidity + "%" : ""}</b>
                        </p>
                        <p style={{ color: "white", margin: "0" }}>
                            {"Wind: "}
                            <b style={{ fontWeight: "500" }}>{props.conditions ? degToCompass(props.conditions.wind.deg) + " " +
                                props.conditions.wind.speed + " mph" : ""}</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        null
    )
}