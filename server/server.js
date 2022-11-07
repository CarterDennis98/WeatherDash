const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// Routes
app.use(require("./routes/users"));

// Get driver connection
const dbo = require("./db/conn");

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    // Perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});