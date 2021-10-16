import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const suscriberSchema = new Schema({ 
    name: {type: String, required: [true, 'El nombre es obligatorio']}, 
    lastName: String, 
    email: {type: String, required: [true, 'El email es obligatorio']}, 
    password: {type: String, required: [true, 'El password es obligatorio']},
    mobile: String,
    country: {type: String, required: [true, 'password obligatorio']},
    city: {type: String, required: [true, 'password obligatorio']},
    divInd: {type: Boolean, default: true},
    uvrInd: {type: Boolean, default: true},
    uvtInd: {type: Boolean, default: true},
    habeas: {type: Boolean, default: true},
    // habeas: {type: Boolean, required: [true, 'El Habeas Data es obligatorio']}
});

// Convertir a modelo 
const Suscriber = mongoose.model('Suscriber', suscriberSchema); 
export default Suscriber;