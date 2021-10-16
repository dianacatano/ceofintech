import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const contactSchema = new Schema({ 
    name: {type: String, required: [true, 'Campo obligatorio']}, 
    lastName: {type: String, required: [true, 'Campo obligatorio']}, 
    email: {type: String, required: [true, 'Campo obligatorio']}, 
    subject: String, 
    message: {type: String, required: [true, 'Campo obligatorio']}, 
    habeas: {type: Boolean, default: true},
    // habeas: {type: Boolean, required: [true, 'Campo obligatorio']}, 
    date:{type: Date, default: Date.now}, 
});

// Convertir a modelo 
const Contact = mongoose.model('Contact', contactSchema); 
export default Contact;