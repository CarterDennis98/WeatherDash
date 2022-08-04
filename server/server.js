import cors from "cors";
import express, { json } from "express";
const app = express();
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

// Routes
app.use(require("./routes/users"));

// Get driver connection
import { connectToServer } from "./db/conn";

app.listen(port, () => {
    // Perform a database connection when server starts
    connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${port}`);
});