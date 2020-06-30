import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String
        , required: true
    },
    lastName: String,
    age: Number
})

export default model('User',userSchema);