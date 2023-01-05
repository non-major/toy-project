import { model } from "mongoose";
import { UserSchema } from "../schemas/user-schema";
import { postModel } from "./postModel.js";
import { IuserModel, user } from "../../interface/index";

const User = model("users", UserSchema);

export class UserModel implements IuserModel {
  async create(userInfo: user): Promise<user> {
    return await User.create(userInfo);
  }

  async findByEmail(email: string): Promise<string> {
    return await User.findOne({ email });
  }

  async findByNickname(nickname: string): Promise<user> {
    return await User.findOne({ nickname });
  }

  async findById(userId: number): Promise<user> {
    return await User.findOne({ _id: userId });
  }

  async findAll(): Promise<user[]> {
    return await User.find();
  }

  // async update(userId, update) {
  //   const filter = { _id: userId };
  //   const option = { returnOriginal: false };

  //   return await User.findByIdAndUpdate(filter, update, option);
  // }

  // async delete(userId) {
  //   return await User.findByIdAndDelete({ _id: userId });
  // }

  // async findTopFive() {
  //   console.log(await User.find({}, { postCount: -1, createdAt: 1 }).limit(5));
  //   const ranks = await User.find({}, ["nickname", "postCount"], {
  //     postCount: -1,
  //     createdAt: -1,
  //   }).limit(5);
  //   return ranks;
  // }

  // async increaseCount(userId) {
  //   const user = await User.findOneAndUpdate(
  //     { _id: userId },
  //     { $inc: { postCount: 1 } }
  //   );
  //   return user;
  // }

  // async decreaseCount(postId) {
  //   const userId = await postModel.getUserId(postId);

  //   const user = await User.findOneAndUpdate(
  //     { _id: userId },
  //     { $inc: { postCount: -1 } }
  //   );
  //   return user;
  // }

  // async getUserInfo(userId) {
  //   return await User.findOne({ _id: userId }, [
  //     "email",
  //     "nickname",
  //     "postCount",
  //   ]);
  // }
}

const userModel = new UserModel();

export { userModel };
