import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const userSchema = new Schema({ 
    name: {type: String, required: [true, 'Name obligatorio']}, 
    lastName: String, 
    email: {type: String, required: [true, 'email obligatorio']}, 
    profile: {type: String, required: [true, 'profile obligatorio']},
    password: {type: String, required: [true, 'password obligatorio']}
});

// Convertir a modelo 
const User = mongoose.model('User', userSchema); 
export default User;