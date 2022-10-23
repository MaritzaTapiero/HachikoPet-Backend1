const mongoose = require("mongoose");

const alimentosSchema = mongoose.Schema({
    nombre: { type: String, maxLength: 40, required: true, unique: true},
    descripcion: {type: String, maxLength: 100, required: true },
    comida_gato: {type: Boolean, required: true}

});

module.exports = mongoose.model("Alimentos", alimentosSchema );
