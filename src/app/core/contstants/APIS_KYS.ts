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
  },
};
