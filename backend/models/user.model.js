import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        select:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    organization:{
        type:Boolean,
        default:false,
    },
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            default:[],
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            default:[],
        }
    ],
    profileImg:{
        type:String,
        default:"",
    },
    coverImg:{
        type:String,
        default:"",
    },
    bio:{
        type:String,
        default:"",
    },
    link:{
        type:String,
        default:"",
    },
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: [],
        }
    ]
},{timestamps:true,})

const User = mongoose.model("User",userSchema)

export default User;