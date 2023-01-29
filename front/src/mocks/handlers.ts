import { rest } from "msw";

export const handlers = [
  // rest.get("/api/users", (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json([
  //       {
  //         nickname: "닉네임1",
  //         email: "이메일1@naver.com",
  //         signUpDate: "2023-01-01",
  //       },
  //       {
  //         nickname: "닉네임2",
  //         email: "이메일2@naver.com",
  //         signUpDate: "2023-01-10",
  //       },
  //     ]),
  //   );
  // }),
  // rest.get("/api/reports", (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json([
  //       {
  //         postId: 1,
  //         bookImageURL:
  //           "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158392239.jpg",
  //         nickname: "dihoon",
  //         title: "모던 자바스크립트 Deep Dive",
  //         content: "자바스크립트는 딥다이브로~~!!",
  //       },
  //       {
  //         postId: 2,
  //         bookImageURL:
  //           "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791162543207.jpg",
  //         nickname: "아무개",
  //         title: "오늘부터 작심만일",
  //         content:
  //           "1월에 결심한 일을 12월까지 실천했다면 당신의 인생이 어떻게 변화했을지 상상해본 적 있는가? 늘 목표와 계획은 원대하게 세우지만 이를 끝까지 이어 나갈 힘은 부족하기만 하다. 매일 썼다 지우는 1회성 계획과 금세 미루고 포기하는 습관을 바꾸고자 애써보지만 스스로 만든 변명 앞에 금세 무너진다. 늘 이유는 있었다. ‘오늘 야근을 안 한다면’, ‘주말에 약속이 없다면’, ‘피곤하지 않는다면’, ‘지금 당장 바쁜 것만 끝난다면’과 같은 것들이다. 하지만 정말 그 이유들이 사라진다면 당신은 작심삼일을 멈출 수 있을까?",
  //       },
  //     ]),
  //   );
  // }),
  // rest.get("/api/reporterList/:postId", (req, res, ctx) => {
  //   const { postId } = req.params;
  //   switch (postId) {
  //     case "1":
  //       return res(
  //         ctx.status(200),
  //         ctx.json([
  //           {
  //             reporter: "홍길동",
  //             reason: "신고사유 1",
  //           },
  //           {
  //             reporter: "홍당무",
  //             reason: "신고사유 2",
  //           },
  //         ]),
  //       );
  //     case "2":
  //       return res(
  //         ctx.status(200),
  //         ctx.json([
  //           {
  //             reporter: "홍길동",
  //             reason: "신고사유 1",
  //           },
  //           {
  //             reporter: "홍당무",
  //             reason: "신고 사유 2",
  //           },
  //           {
  //             reporter: "홍삼",
  //             reason: "신고 사유 3",
  //           },
  //         ]),
  //       );
  //   }
  // }),
];
