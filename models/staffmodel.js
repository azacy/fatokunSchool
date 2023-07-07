import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const staffSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },

        email:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },

        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ['primary', 'secondry'],
            default: false
        },
        isAdmin:{
            type:Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    },
    
)
export const staff = mongoose.model('staff', staffSchema);