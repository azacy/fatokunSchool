import mongoose from 'mongoose';
import {student} from "../models/studentmodel.js";


// to register a student on the wedsite
export const newStudent = async (req, res) =>{
    const { surname, firstname, middlename } = req.body;
    // const somthing without a password
    try{
        const reg =student.create({ surname, firstname, middlename, category})
        console.log(reg) 
        return res.json({reg})
    
    } catch (error){
        console.error(error.message);
        return res.json({err: 'an error ocurred', msg:error.message});
    }
};

// to get all students profile
export const gettAllStudents = async (req, res) =>{
    try {
        const reg = await student.find();
        if (reg) {
            res.send(reg)
        } else{
            res.send('no record found');
        }
    } catch (error) {
        console.error(error.message);
    } // remember to recheck the above.
}; 

// to get a single student