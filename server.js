import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//configuring env
dotenv.config();


const app = express();

app.get('/', (req, res) => {
    res.send(
        "<h1>Welcom to this E-commerce website</h1>"
    );
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server Rumming on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white);
})