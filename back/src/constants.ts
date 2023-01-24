interface EndPointInterface {
  guest: string;
  user: string;
  post: string;
}

export const endPoint: EndPointInterface = {
  guest: "/api/guest",
  user: "/api/users",
  post: "/api/posts",
};
