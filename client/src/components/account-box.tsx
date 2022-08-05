import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as bcrypt from "bcryptjs";
import * as React from "react";
import validator from "validator";
import { createUser, getUser, loginUser, updateUser } from '../api/user';

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

const cancelStyle = {
    "&.MuiButton-contained": {
        color: "white",
        backgroundColor: "#bb0909"
    },
    "&.MuiButton-contained:hover": {
        backgroundColor: "red"
    }
}

export default function AccountBox(props: any) {
    const [task, setTask] = React.useState<string>("log in");
    const [email, setEmail] = React.useState<{ email: string, isValid: boolean }>({ email: "", isValid: false });
    const [password, setPassword] = React.useState<{ password: string, isValid: boolean }>({ password: "", isValid: false });
    const [changeEmail, setChangeEmail] = React.useState<boolean>(false);
    const [newEmail, setNewEmail] = React.useState<{ email: string, isValid: boolean }>({ email: "", isValid: false });
    const [confirmEmail, setConfirmEmail] = React.useState<string>("");
    const [changePassword, setChangePassword] = React.useState<boolean>(false);
    const [newPassword, setNewPassword] = React.useState<{ password: string, isValid: boolean }>({ password: "", isValid: false });
    const [confirmPassword, setConfirmPassword] = React.useState<string>("");

    const saltRounds = 10;

    function validatePassword(value: string) {
        return (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value));
    }

    const handleEmailChange = (event: any) => {
        setEmail((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            isValid: validator.isEmail(event.target.value)
        }));
    }

    const handleNewEmailChange = (event: any) => {
        setNewEmail((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            isValid: validator.isEmail(event.target.value)
        }));
    }

    const handleConfirmEmailChange = (event: any) => {
        setConfirmEmail(event.target.value);
    }

    const handlePasswordChange = (event: any) => {
        setPassword((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            isValid: validatePassword(event.target.value)
        }));
    }

    const handleNewPasswordChange = (event: any) => {
        setNewPassword((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
            isValid: validatePassword(event.target.value)
        }));
    }

    const handleConfirmPasswordChange = (event: any) => {
        setConfirmPassword(event.target.value);
    }

    const cancelChange = () => {
        if (changeEmail) {
            setNewEmail({ email: "", isValid: false });
            setConfirmEmail("");
            setChangeEmail(false);
        } else {
            setNewPassword({ password: "", isValid: false });
            setConfirmPassword("");
            setChangePassword(false);
        }
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
                    email: email.email
                }).then(async function (response) {
                    if (response) {
                        // Check if hashed password from db matches string user entered
                        bcrypt.compare(password.password, response.password, function (error, isMatch) {
                            if (error) {
                                throw (error);
                            } else if (!isMatch) {
                                console.log("Passwords don't match");
                            } else {
                                props.setUser({
                                    _id: response._id,
                                    email: response.email,
                                    bookmarks: response.bookmarks
                                });
                            }
                        });
                    }
                    setEmail({ email: "", isValid: false });
                    setPassword({ password: "", isValid: false });
                });
            } catch (error) {
                throw (error);
            }
        } else {
            // Hash and salt password
            bcrypt.genSalt(saltRounds, function (saltError, salt) {
                if (saltError) {
                    throw (saltError);
                } else {
                    bcrypt.hash(password.password, salt, function (hashError, hash) {
                        if (hashError) {
                            throw (hashError);
                        } else {
                            // Create user
                            try {
                                createUser({
                                    user: {
                                        email: email.email,
                                        password: hash
                                    }
                                }).then(async function (response) {
                                    getUser({
                                        _id: response.insertedId
                                    }).then(async function (response) {
                                        props.setUser({
                                            _id: response._id,
                                            email: response.email,
                                            bookmarks: response.bookmarks
                                        });
                                        setEmail({ email: "", isValid: false });
                                        setPassword({ password: "", isValid: false });
                                    });
                                });
                            } catch (error) {
                                throw (error);
                            }
                        }
                    })
                }
            });
        }
    }

    const handleSignOut = () => {
        props.setUser(null);
    }

    const handleChangeEmail = () => {
        setChangeEmail(!changeEmail);
    }

    const handleChangePassword = () => {
        setChangePassword(!changePassword);
    }

    const submitEmailChange = async () => {
        try {
            updateUser({
                _id: props.user._id,
                user: {
                    email: newEmail.email
                }
            }).then(async function (response) {
                getUser({
                    _id: props.user._id
                }).then(async function (response) {
                    props.setUser({
                        _id: response._id,
                        email: response.email,
                        bookmarks: response.bookmarks
                    });
                })
                setNewEmail({ email: "", isValid: false });
                setConfirmEmail("");
                setChangeEmail(false);
            })
        } catch (error) {
            throw (error);
        }
    }

    const submitPasswordChange = async () => {
        bcrypt.genSalt(saltRounds, function (saltError, salt) {
            if (saltError) {
                throw (saltError);
            } else {
                bcrypt.hash(newPassword.password, salt, function (hashError, hash) {
                    if (hashError) {
                        throw (hashError);
                    } else {
                        try {
                            updateUser({
                                _id: props.user._id,
                                user: {
                                    password: hash
                                }
                            }).then(async function () {
                                setNewPassword({ password: "", isValid: false });
                                setConfirmPassword("");
                                setChangePassword(false);
                            });
                        } catch (error) {
                            throw (error);
                        }
                    }
                });
            }
        });

    }

    return (
        <Box
            sx={{
                height: "300px", width: "300px", borderRadius: "4px", backgroundColor: "#4c4c4c", color: "white", display: "flex",
                flexDirection: "column", alignItems: "center", boxShadow: "5px 5px 10px #151515"
            }}
        >
            {props.user ?
                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%",
                    marginBottom: "15px"
                }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <p style={{ margin: "15px 0px 15px 0px" }}><b>Signed in as:</b></p>
                        <p style={{ margin: "0px" }}>{props.user.email}</p>
                    </div>
                    {!changeEmail && !changePassword ?
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <p
                                style={{ textDecoration: "underline", cursor: "pointer", marginTop: "0px" }}
                                onClick={handleChangeEmail}
                            >
                                Change email
                            </p>
                            <p
                                style={{ textDecoration: "underline", cursor: "pointer" }}
                                onClick={handleChangePassword}
                            >
                                Change password
                            </p>
                        </div> :
                        changeEmail ?
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <TextField
                                    value={newEmail.email}
                                    onChange={handleNewEmailChange}
                                    error={!newEmail.isValid && newEmail.email !== ""}
                                    helperText={!newEmail.isValid && newEmail.email !== "" ? "Invalid email" : ""}
                                    variant="standard"
                                    label="New Email"
                                    name="email"
                                    sx={textFieldStyle}
                                />
                                <TextField
                                    value={confirmEmail}
                                    onChange={handleConfirmEmailChange}
                                    variant="standard"
                                    label="Confirm New Email"
                                    disabled={!newEmail.isValid || newEmail.email === ""}
                                    sx={textFieldStyle}
                                />
                                <Button
                                    onClick={submitEmailChange}
                                    variant={"contained"}
                                    disabled={!newEmail.isValid || newEmail.email === "" || newEmail.email !== confirmEmail}
                                    sx={submitStyle}
                                >
                                    Confirm
                                </Button>
                            </div> :
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <TextField
                                    value={newPassword.password}
                                    onChange={handleNewPasswordChange}
                                    error={!newPassword.isValid && newPassword.password !== ""}
                                    helperText={!newPassword.isValid && newPassword.password !== "" ? "Invalid password" : ""}
                                    type="password"
                                    variant="standard"
                                    label="New Password"
                                    name="password"
                                    sx={textFieldStyle}
                                />
                                <TextField
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    type="password"
                                    variant="standard"
                                    label="Confirm New Password"
                                    disabled={!newPassword.isValid || newPassword.password === ""}
                                    sx={textFieldStyle}
                                />
                                <Button
                                    onClick={submitPasswordChange}
                                    variant={"contained"}
                                    disabled={!newPassword.isValid || newPassword.password === "" || newPassword.password !== confirmPassword}
                                    sx={submitStyle}
                                >
                                    Confirm
                                </Button>
                            </div>
                    }
                    {changeEmail || changePassword ?
                        <div>
                            <Button
                                onClick={cancelChange}
                                variant="contained"
                                sx={cancelStyle}
                            >
                                Cancel
                            </Button>
                        </div> :
                        <Button
                            onClick={handleSignOut}
                            variant="contained"
                            sx={submitStyle}
                        >
                            Sign Out
                        </Button>
                    }
                </div> :
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
                    {task === "log in" ?
                        <React.Fragment>
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
                                    disabled={!email.isValid || password.password === ""}
                                    sx={submitStyle}
                                >
                                    Submit
                                </Button>
                            </div>
                        </React.Fragment> :
                        <React.Fragment>
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

                            </form>
                            <div style={{ height: "100%", display: "flex", margin: "5px", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                <Button
                                    onClick={handleSubmit}
                                    variant={"contained"}
                                    disabled={!email.isValid || !password.isValid}
                                    sx={submitStyle}
                                >
                                    Submit
                                </Button>
                            </div>
                        </React.Fragment>
                    }
                </React.Fragment>
            }
        </Box>
    );
}