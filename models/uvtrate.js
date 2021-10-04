import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const uvtRateSchema = new Schema({ 
    validyear: {type: String, required: [true, 'Año de vigencia obligatorio']}, 
    inidate: {type: String, required: [true, 'Fecha de inicio obligatorio']},
    enddate: {type: String, required: [true, 'Fecha de fin obligatorio']},
    resol: {type: String, required: [true, 'Resolución obligatorio']},
    resoldate: {type: String, required: [true, 'Fecha de resolución obligatorio']},
    perrate: {type: Number, required: [true, 'Tasa para el periodo obligatorio']},
});

// Convertir a modelo 
const UvtRate = mongoose.model('UvtRate', uvtRateSchema); 
export default UvtRate;