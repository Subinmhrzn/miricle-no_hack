import mongoose from "mongoose";



const buyerSchema = new mongoose.Schema({

    username :{
        type:String,
            required : true,
            unique: true,
        },
        email :{
        type:String,
            required : true,
            unique: true,
        },
        password :{
        type:String,
            required : true,
            
        },
        avatar:{
            type: String,
            default:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
        },
        role:{
            type:String,
            default:"buyer"
        }
        
},{timestamps: true});

const Buyer = mongoose.model('Buyer', buyerSchema)

export default Buyer;