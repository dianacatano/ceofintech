import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const dollarExSchema = new Schema({ 
    validdate: {type: String, required: [true, 'Campo obligatorio']}, 
    dayrate: {type: Number, required: [true, 'Campo obligatorio']}
});

// Convertir a modelo 
const DollarEx = mongoose.model('DollarEx', dollarExSchema); 
export default DollarEx;