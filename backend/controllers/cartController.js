import userModel from "../models/userModel.js";

const addToCart=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const updateCart=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const getUserCart=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addToCart, updateCart, getUserCart}