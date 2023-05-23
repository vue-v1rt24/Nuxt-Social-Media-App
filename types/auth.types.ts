export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  profileImage: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IJwt {
  exp: number;
  iat: number;
  userId: number;
}
