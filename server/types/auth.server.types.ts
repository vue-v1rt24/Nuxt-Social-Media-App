interface IUserBase {
  name: string;
  username: string;
  email: string;
}

///
export interface IRegister extends IUserBase {
  password: string;
  repeatPassword: string;
}

///
export interface ILogin {
  username: string;
  password: string;
}

///
export interface IUser extends IUserBase {
  id: number;
  profileImage: string;
}
