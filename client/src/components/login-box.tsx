import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function LoginBox(props: any) {

    return (
        <Box
            component="form"
            sx={{
                height: "200px", width: "300px", borderRadius: "4px", backgroundColor: "#4c4c4c", color: "white", display: "flex",
                flexDirection: "column", justifyContent: "space-between"
            }}
        >
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <p style={{ marginBottom: "0px" }}>Log in</p>
                <TextField
                    variant="standard"
                    label="Email"
                    sx={{width: "250px"}}
                />
                <TextField
                    variant="standard"
                    label="Password"
                    sx={{width: "250px"}}
                />
            </div>
            <div style={{ height: "100%", display: "flex", margin: "5px", justifyContent: "flex-end", alignItems: "flex-end" }}>
                <Button
                    variant={"contained"}
                >
                    Submit
                </Button>
            </div>
        </Box>
    );
}