import { rest } from "msw";

export const handlers = [
  rest.get("/api/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          nickname: "닉네임1",
          email: "이메일1@naver.com",
          signUpDate: "2023-01-01",
        },
        {
          nickname: "닉네임2",
          email: "이메일2@naver.com",
          signUpDate: "2023-01-10",
        },
      ]),
    );
  }),
];
