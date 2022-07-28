import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Paper } from '@mui/material';
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";
import Tooltip from '@mui/material/Tooltip';
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
import * as React from "react";

const customPaper = (props: any) => {
    return <Paper sx={{ backgroundColor: "#4a4a4a", backgroundImage: "none" }} {...props} elevation={5} />
}

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

const autocompleteService = { current: null };

interface MainTextMatchedSubstrings {
    offset: number;
    length: number;
}
interface StructuredFormatting {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: readonly MainTextMatchedSubstrings[];
}
interface PlaceType {
    description: string;
    structured_formatting: StructuredFormatting;
}

export default function SearchBar(props: any) {
    const searchBarClasses = searchBarStyle();

    const [value, setValue] = React.useState<PlaceType | null>(null);
    const [inputValue, setInputValue] = React.useState("");
    const [options, setOptions] = React.useState<readonly PlaceType[]>([]);

    // Get place predictions from Google Places API
    const fetch = React.useMemo(
        () =>
            throttle(
                (
                    request: {
                        input: string,
                        types: ["(cities)"],
                        componentRestrictions: { "country": "us" }
                    },
                    callback: (results?: readonly PlaceType[]) => void,
                ) => {
                    (autocompleteService.current as any).getPlacePredictions(
                        request,
                        callback,
                    );
                },
                200,
            ),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && (window as any).google) {
            autocompleteService.current = new (
                window as any
            ).google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === "") {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({
            input: inputValue,
            types: ["(cities)"],
            componentRestrictions: { "country": "us" }
        }, (results?: readonly PlaceType[]) => {
            if (active) {
                let newOptions: readonly PlaceType[] = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, inputValue, fetch]);

    React.useEffect(() => {
        if (value) {
            var request = {
                placeId: (value as any).place_id,
                fields: ["geometry"]
            };

            const service = new google.maps.places.PlacesService(document.createElement('div'));
            service.getDetails(request, function (place: any, status: any) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    props.setCoords({ lat: place.geometry.location.lat(), long: place.geometry.location.lng() });
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleUseMyLocation = () => {
        props.setCoords({ lat: props.userCoords.lat, long: props.userCoords.long });
        setValue(null);
    }

    return (
        <Autocomplete
            size="small"
            PaperComponent={customPaper}
            sx={{ width: "400px" }}
            getOptionLabel={(option) =>
                typeof option === "string" ? option : option.description
            }
            filterOptions={(option) => option}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            noOptionsText={<span style={{ color: "#969696" }}>No Options</span>}
            value={value}
            onChange={(event: any, newValue: PlaceType | null) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    className={searchBarClasses.root}
                    fullWidth
                    placeholder="Search Locations"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <Tooltip title="Use Current Location">
                                    <IconButton sx={{ color: "white" }} onClick={handleUseMyLocation}>
                                        <MyLocationIcon />
                                    </IconButton>
                                </Tooltip>
                            </InputAdornment>
                        )
                    }}
                />
            )}
            renderOption={(props, option) => {
                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match: any) => [match.offset, match.offset + match.length]),
                );

                return (
                    <li {...props} className="search-result">
                        <Grid container alignItems="center">
                            <Grid item>
                                <Box
                                    component={LocationOnIcon}
                                    sx={{ color: "white", mr: 2 }}
                                />
                            </Grid>
                            <Grid item xs>
                                {parts.map((part, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontWeight: part.highlight ? 700 : 400,
                                            color: "white"
                                        }}
                                    >
                                        {part.text}
                                    </span>
                                ))}
                                <Typography variant="body2" color="#969696">
                                    {option.structured_formatting.secondary_text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
}