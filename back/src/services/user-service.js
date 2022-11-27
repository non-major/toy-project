import { userModel } from "../db/index.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
class UserService{
    constructor(userModel){
        this.userModel =userModel;
    }

async addUser(userInfo){
    const{email,password,nickname} = userInfo;

   // 중복확인
    const user = await userModel.findByEmail(email);
    if(user){
        throw new Error(
            "이 이메일은 현재 사용중입니다.다른 이메일을 입력해 주세요."
        )
    }

    const userNickname =await userModel.findByNickname(nickname);
    if(userNickname){
        throw new Error(
            "이 닉네임은 현재 사용중입니다.다른 닉네임을 입력해 주세요."
        )
    }

    //비밀번호 해쉬 
    const hashedPassword = await bcrypt.hash(password,10)

    const newUserInfo = {email,password:hashedPassword,nickname} 
    
    const createdNewUser = await this.userModel.create(newUserInfo);

    return createdNewUser;

}

//로그인
async getUserToken(loginInfo){
    const{email,password} = loginInfo;
    const user =await userModel.findByEmail(email)
    if(!user){
        throw new Error(
            "가입되지 않은 이메일 입니다."
        )
    }

const passwordHash = user.password;

const isPasswordCorrect = await bcrypt.compare(
    password,
    passwordHash
)

//비밀번호
if(!isPasswordCorrect){
    throw new Error(
        "비밀번호가 일치하지 않습니다.다시 한번 확인해 주세요."
    )
}

//로그인 성공=>jwt 웹 토큰 생성
const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
const token = jwt.sign(
    { userEmail: user.email, nickname: user.nickname }, 
    secretKey,
    {expiresIn:900});

return {token}

}

//회원정보 수정
async setUser(userInfoRequired,toUpdate){
    const {userId,currentPassword} = userInfoRequired;

    let user = await userModel.findById(userId);
    if(!user){
        throw new Error ("가입 내역이 없습니다. 다시 한 번 확인해 주세요.")
    }
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
        currentPassword,
        correctPasswordHash 
    )

    if(!isPasswordCorrect){
    throw new Error(
        "현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
    )
    }
    const {password , nickname}=toUpdate;

    if(password){
        const newPassWordHash =await bcrypt.hash(password,10);
        toUpdate.password = newPassWordHash
    }

    const userNickname = await userModel.findByNickname(nickname);
       if(userNickname){
            throw new Error(
                "이 닉네임은 현재 사용중입니다.다른 닉네임을 입력해 주세요."
            )
        }
       
        toUpdate.nickname =nickname

    user = await this.userModel.update(userId,toUpdate);
  
      return user;


}
}


const userService = new UserService(userModel);

export {userService}