import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';



export const bsignup = async (req, res, next) => {

    const { username, email, password, role} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUSer = new User ({username,email,password: hashedPassword,role});
    try{
    await newUSer.save();
     res.status(201).json("User created sucessfully")
    } catch(error)
    {
        next(error);
    }

};
export const bsignin = async (req,res,next)=>{
    const {email, password, role} = req.body;
    try {
        const validUser = await User.findOne({email,role});
        if(!validUser) return next(errorHandler(404,'User not found'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(404,'Wrong credential'))
        const token =jwt.sign({id : validUser._id},process.env.JWT_SECRET)
        const {password: pass, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly:true})
        .status(200)
        .json(rest);
    } catch (error) {
        next(error);        
    }
}
