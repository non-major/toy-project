interface EndPointInterface {
  guest: string;
  user: string;
}

export const endPoint: EndPointInterface = {
  guest: "/api/guest",
  user: "/api/user",
};
