const alimentosModelo = require("../modelos/AlimentosModelo");
const AlimentosModelo = require ("../modelos/AlimentosModelo");
const AlimentosOperaciones = {};

AlimentosOperaciones.CrearAlimento = async (req, res) => {    
    try {
        const objeto ={
            nombre: "Comida Gato castrado",
            descripcion: "Unicamente Gato Mayor y Castrado",
            comida_gato: true
        }
        console.log(objeto);
        const Alimentos = new alimentosModelo(objeto);
        const alimentosGuardada = await Alimentos.save();
        res.status(201).send(alimentosGuardada); 
    } catch (error) {
        res.status(400).send("Mala peticion"+error);
    }
} 
    
AlimentosOperaciones.ConsultarAlimento = async (req, res) => {  
    try {
        const ListaAlimentos = await AlimentosModelo.find();
        if (ListaAlimentos.length >0){
            res.status(200).send(ListaAlimentos); 
        }
        else{
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala peticion");
    }    
}

AlimentosOperaciones.ModificarAlimento = async (req, res) => {    
}

AlimentosOperaciones.BorrarAlimento = async (req, res) => {    
}

module.exports = AlimentosOperaciones;
