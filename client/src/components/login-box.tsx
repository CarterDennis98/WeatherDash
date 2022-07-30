import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from "react";
import { createUser } from '../api/user';

const textFieldStyle = {
    width: "250px",
    color: "white",
    marginBottom: "10px",
    ".MuiInput-input": {
        color: "white"
    },
    ".MuiInput-underline:before": {
        borderBottomColor: "#bfbfbf!important"
    },
    ".MuiInput-underline:hover:before": {
        borderBottomColor: "#bfbfbf!important"
    },
    ".MuiInput-underline:after": {
        borderBottomColor: "white!important"
    },
    ".MuiInputLabel-root": {
        color: "#bfbfbf!important"
    },
    ".MuiInputLabel-root:after": {
        color: "#bfbfbf!important"
    }
}

const toggleButtonStyle = {
    "&.MuiToggleButton-root": {
        width: "100%",
        border: "none",
        borderRadius: "4px 4px 0px 0px",
        color: "white"
    },
    "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: "transparent",
        borderBottom: "2px solid white",
        fontWeight: "bold"
    },
    "&.MuiToggleButton-root:hover": {
        backgroundImage: "linear-gradient(#4c4c4c, #ffffff38)"
    }
}

const submitStyle = {
    root: {
        color: "white"
    }
}

export default function LoginBox(props: any) {
    const [task, setTask] = React.useState<string>("log in");
    const [info, setInfo] = React.useState<{ email: string, password: string }>({ email: "", password: "" });

    const handleInfoChange = (event: any) => {
        setInfo((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleTaskChange = (event: React.MouseEvent<HTMLElement>, newTask: string) => {
        if (newTask !== null) {
            setTask(newTask);
            setInfo({ email: "", password: "" });
        }
    }

    const handleSubmit = async () => {
        if (task === "log in") {

        } else {
            try {
                createUser({
                    user: { email: info.email, password: info.password }
                }).then(async function (response) {
                    setInfo({ email: "", password: "" });
                });
            } catch (error) {
                throw (error);
            }
        }
    }

    return (
        <Box
            sx={{
                height: "250px", width: "300px", borderRadius: "4px", backgroundColor: "#4c4c4c", color: "white", display: "flex",
                flexDirection: "column", alignItems: "center", boxShadow: "5px 5px 10px #151515"
            }}
        >
            <ToggleButtonGroup
                value={task}
                exclusive
                onChange={handleTaskChange}
                sx={{ marginBottom: "10px", width: "100%", display: "flex", justifyContent: "center" }}
            >
                <ToggleButton value="log in" sx={toggleButtonStyle}>
                    Log in
                </ToggleButton>
                <ToggleButton value="sign up" sx={toggleButtonStyle}>
                    Sign up
                </ToggleButton>
            </ToggleButtonGroup>
            <form onChange={handleInfoChange} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <TextField
                    value={info.email}
                    variant="standard"
                    label="Email"
                    name="email"
                    sx={textFieldStyle}
                />
                <TextField
                    value={info.password}
                    variant="standard"
                    label="Password"
                    name="password"
                    sx={textFieldStyle}
                />
            </form>
            <div style={{ height: "100%", display: "flex", margin: "5px", justifyContent: "flex-end", alignItems: "center" }}>
                <Button
                    onClick={handleSubmit}
                    variant={"contained"}
                    disabled={!info.email || !info.password}
                    sx={submitStyle}
                >
                    Submit
                </Button>
            </div>
        </Box>
    );
}