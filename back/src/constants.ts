interface EndPointInterface {
  guest: string;
  user: string;
  post: string;
  comment: string;
  report: string;
}

export const endPoint: EndPointInterface = {
  guest: "/api/guest",
  user: "/api/users",
  post: "/api/posts",
  comment: "/api/comments",
  report: "/api/reports",
};
