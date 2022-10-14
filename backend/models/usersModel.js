const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    phone:{
        type:Number,
        required: [true, "Phone is required"],
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    isRegistered:{
        type:Boolean,
        default: false,
    },
    Updated:{
        type:Date,
        default: new Date(),
    }
})

const UserModel=mongoose.model('users',UserSchema)

module.exports=UserModel;