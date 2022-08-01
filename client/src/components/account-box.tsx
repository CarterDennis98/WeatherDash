import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from "react";
import isEmail from "validator/lib/isEmail";
import { createUser, loginUser } from '../api/user';

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
    },
    ".MuiFormHelperText-root": {
        fontWeight: "bold",
        color: "red!important",
        fontSize: "14px",
        textShadow: "0 0 red"
    }
}

const submitStyle = {
    "&.MuiButton-contained": {
        color: "white",
        backgroundColor: "#0079C1"
    },
    "&.MuiButton-contained:hover": {
        backgroundColor: "#00B8FF"
    },
    "&.Mui-disabled": {
        backgroundColor: "gray"
    }
}

export default function AccountBox(props: any) {
    const [task, setTask] = React.useState<string>("log in");
    const [email, setEmail] = React.useState<{ email: string, isValid: boolean }>({ email: "", isValid: false });
    const [password, setPassword] = React.useState<{ password: string, isValid: boolean }>({ password: "", isValid: false });

    function validatePassword(value: string) {
        return (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value));
    }

    const handleEmailChange = (event: any) => {
        setEmail((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            isValid: isEmail(event.target.value)
        }));
    }

    const handlePasswordChange = (event: any) => {
        setPassword((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            isValid: validatePassword(event.target.value)
        }));
    }

    const handleTaskChange = (event: React.MouseEvent<HTMLElement>, newTask: string) => {
        if (newTask !== null) {
            setTask(newTask);
            setEmail({ email: "", isValid: false });
            setPassword({ password: "", isValid: false });
        }
    }

    const handleSubmit = async () => {
        if (task === "log in") {
            try {
                loginUser({
                    email: email.email,
                    password: password.password
                }).then(async function (response) {
                    setEmail({ email: "", isValid: false });
                    setPassword({ password: "", isValid: false });
                    if (response) {
                        props.setUser({
                            _id: response._id,
                            email: response.email,
                            bookmarks: response.bookmarks
                        });
                    }
                });
            } catch (error) {
                throw (error);
            }
        } else {
            try {
                createUser({
                    user: { email: email.email, password: password.password }
                }).then(async function (response) {
                    setEmail({ email: "", isValid: false });
                    setPassword({ password: "", isValid: false });
                });
            } catch (error) {
                throw (error);
            }
        }
    }

    const handleSignOut = () => {
        props.setUser(null);
    }

    return (
        <Box
            sx={{
                height: "300px", width: "300px", borderRadius: "4px", backgroundColor: "#4c4c4c", color: "white", display: "flex",
                flexDirection: "column", alignItems: "center", boxShadow: "5px 5px 10px #151515"
            }}
        >
            {props.user ?
                <React.Fragment>
                    <p>{props.user.email}</p>
                    <Button
                        onClick={handleSignOut}
                        variant="contained"
                        sx={submitStyle}
                    >
                        Sign Out
                    </Button>
                </React.Fragment> :
                <React.Fragment>
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
                    <form style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <TextField
                            value={email.email}
                            onChange={handleEmailChange}
                            error={!email.isValid && email.email !== ""}
                            helperText={!email.isValid && email.email !== "" ? "Invalid email" : ""}
                            variant="standard"
                            label="Email"
                            name="email"
                            sx={textFieldStyle}
                        />
                        <TextField
                            value={password.password}
                            onChange={handlePasswordChange}
                            error={!password.isValid && password.password !== ""}
                            helperText={!password.isValid && password.password !== "" ? "Invalid password" : ""}
                            type="password"
                            variant="standard"
                            label="Password"
                            name="password"
                            sx={textFieldStyle}
                        />
                        <p
                            style={{ margin: "0px", fontSize: "10px", textDecoration: "underline", cursor: "pointer" }}
                            onClick={() => { console.log("I forgor 💀") }}
                        >
                            Forgot password?
                        </p>
                    </form>
                    <div style={{ height: "100%", display: "flex", margin: "5px", justifyContent: "flex-end", alignItems: "flex-end" }}>
                        <Button
                            onClick={handleSubmit}
                            variant={"contained"}
                            disabled={!email.isValid /*|| !password.isValid*/}
                            sx={submitStyle}
                        >
                            Submit
                        </Button>
                    </div>
                </React.Fragment>
            }
        </Box>
    );
}