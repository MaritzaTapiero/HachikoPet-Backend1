const mongoose = require("mongoose");

const username = "admin";
const password = "admin";
const database = "hachikoBD";


const URI= "mongodb+srv://"+username+":"+password+"@atlascluster.qymyceu.mongodb.net/"+database+"?retryWrites=true&w=majority";

const conectar = async() =>{
    try {
        await mongoose.connect(URI);
        console.log("Atlas esta en linea");
    } catch (error) {
        console.log("Error en la conexion" +error);  
    }   
}
conectar();

module.exports = mongoose;
