export interface IUser {
  id?: number;
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
  picture?: string;
  description?: string;
}

export interface IUserRegister {
  fullname: string;
  username: string;
  email: string;
  password: string;
}
export interface IUserLogin {
  email: string;
  password: string;
}
