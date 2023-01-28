interface EndPointInterface {
  auth: string;
  guest: string;
  user: string;
  post: string;
  image: string;
  comment: string;
  report: string;
}

export const endPoint: EndPointInterface = {
  auth: "/api/auth",
  guest: "/api/guest",
  user: "/api/users",
  post: "/api/posts",
  image: "/api/image",
  comment: "/api/comments",
  report: "/api/reports",
};
