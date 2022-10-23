//importaciones
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("./conexion");

//configuraciones
const env = process.env;
const port = env.PORT || 8000;
const app = express();
app.use(morgan("dev"));
app.use(cors());


//arranque
app.listen(port, ()=>{
    console.log("API iniciado en el puerto "+port);
})

//rutas
app.get("/", (req, res)=>{
    res.send("API iniciado");
});

app.use("/Alimento", require("./rutas/AlimentosRutas"));
