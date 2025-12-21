import { environment } from '../../../environments/environment.development';

export const APIS_KYS = {
  PRODUCTS: {
    allProducts: `${environment.baseURL}products`,
  },
  CATEGORIEs: {
    allCategory: `${environment.baseURL}categories`,
  },
  Brands: {
    allBrands: `${environment.baseURL}brands`,
  },
  AUTH: {
    signUp: `${environment.baseURL}auth/signup`,
    signIn: `${environment.baseURL}auth/signin`,
    verifyToken: `${environment.baseURL}auth/verifyToken`,
    forgetPass: `${environment.baseURL}auth/forgotPasswords`,
    verifyCode: `${environment.baseURL}auth/verifyResetCode`,
    resetPass: `${environment.baseURL}auth/resetPassword`,
  },
  CART: {
    data: `${environment.baseURL}cart`,
  },
  PAYMENtS: {
    Cash: `${environment.baseURL}orders`,
    Online: `${environment.baseURL}orders/checkout-session`,
  },
  WISHLIST: {
    data: `${environment.baseURL}wishlist`,
  },
  ORDERS: {
    orders: `${environment.baseURL}orders/user`,
  },
};
