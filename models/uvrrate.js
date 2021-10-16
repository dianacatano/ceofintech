import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const uvrRateSchema = new Schema({ 
    validdate: {type: String, required: [true, 'Campo obligatorio']}, 
    dayrate: {type: Number, required: [true, 'Campo obligatorio']},
    perrate: {type: Number, required: [true, 'Campo obligatorio']}
});

// Convertir a modelo 
const UvrRate = mongoose.model('UvrRate', uvrRateSchema); 
export default UvrRate;