import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
    {
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    nickname:{
        type:String,
        required:true,
    },
    // userPost:{
    //     type:mongoose.Schema.Type.objectId,
    //     ref:'postSchema',
    //     required:true
    // }
},{
    collection:"users",
    timestamps:true
})

export{UserSchema}