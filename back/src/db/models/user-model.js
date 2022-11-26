import { model } from "mongoose";
import { UserSchema } from "../schemas/user-schema.js";

const User =model("user",UserSchema);

export class UserModel{

   async create(userInfo){
    return await User.create(userInfo)
   }

   async findByEmail(email){
    return await User.findOne({email})
   }
   
   async findByNickname(nickname){
      return await User.findOne({nickname})
     }

   async findById(userId){
      return await User.findOne({_id:userId})
   }
   



}

const userModel = new UserModel();

export {userModel}