interface EndPointInterface {
  guest: string;
  user: string;
  post: string;
}

export const endPoint: EndPointInterface = {
  guest: "/api/guest",
  user: "/api/user",
  post: "/api/post",
};
