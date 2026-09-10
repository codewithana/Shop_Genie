import ErrorHandler from "../middlewares/errorMiddleware.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";
import database from "../config/database.js";

export const register =catchAsyncError(async(req,res,next)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return next(new ErrorHandler("Please provide all required fields",400));
    }
    const isAlreadyRegistered = await database.query(`SELECT * FROM users WHERE email=$1`,[email]);

    if(isAlreadyRegistered.rows.length>0){
        return next(new ErrorHandler("User already registered,please login",400));
    }

    const hashedPassword=await bcrypt.hash(password,10);
    const user=await atabase.query("INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *",[name,email,hashedPassword]);
})
export const login =catchAsyncError(async(req,res,next)=>{

})
export const getUser =catchAsyncError(async(req,res,next)=>{

})
export const logout =catchAsyncError(async(req,res,next)=>{

})