export interface IUserInfo {
  data: UserData;
}

export interface UserData {
  role: string;
  active: boolean;
  wishlist: string[];
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  addresses: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
