import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const studentSchema = new mongoose.Schema(
{
    surname:{
        type: String,
        required: true,
    },
    firstname:{
        type: String,
        required: true,
    },
    middlename:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        enum: ['primary', 'secondry'],
        default: false
    },
    addmissionId:{
        type:Number,
        required: true,
        unique: true,
        trim: true
    },
    
    },
    {
        timestamps: true,
    }
)
export const student = mongoose.model('student', studentSchema);