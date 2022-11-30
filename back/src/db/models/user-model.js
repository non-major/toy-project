import { model } from "mongoose";
import { UserSchema } from "../schemas/user-schema.js";
import { postModel } from "./postModel.js";

const User = model("users", UserSchema);

export class UserModel {
  async create(userInfo) {
    return await User.create(userInfo);
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findByNickname(nickname) {
    return await User.findOne({ nickname });
  }

  async findById(userId) {
    return await User.findOne({ _id: userId });
  }

  async findAll() {
    return await User.find({});
  }

  async update(userId, update) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    return await User.findByIdAndUpdate(filter, update, option);
  }

  async delete(userId) {
    return await User.findByIdAndDelete({ _id: userId });
  }

  async findTopFive() {
    console.log(await User.find({}, { postCount: -1, createdAt: 1 }).limit(5));
    const ranks = await User.find({}, ["nickname", "postCount"], {
      postCount: -1,
      createdAt: -1,
    }).limit(5);
    return ranks;
  }

  async increaseCount(userId) {
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { postCount: 1 } }
    );
    return user;
  }

  async decreaseCount(postId) {
    const userId = await postModel.getUserId(postId);

    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { postCount: -1 } }
    );
    return user;
  }

  async getUserInfo(userId) {
    return await User.findOne({ _id: userId }, [
      "email",
      "nickname",
      "postCount",
    ]);
  }
}

const userModel = new UserModel();

export { userModel };
