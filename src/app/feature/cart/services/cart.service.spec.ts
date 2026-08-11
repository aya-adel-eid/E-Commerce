// import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { TestBed } from '@angular/core/testing';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';

describe('Cart Services', () => {
  let cartServices: CartService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService],
    });
    cartServices = TestBed.inject(CartService);
    httpController = TestBed.inject(HttpTestingController);
  });
  it('Add To Cart', () => {
    const mokeData = {
      status: 'success',
      message: 'Product added successfully to your cart',
      numOfCartItems: 1,
      cartId: '69cff8a67d358ce90f3e66ab',
      data: {
        _id: '69cff8a67d358ce90f3e66ab',
        cartOwner: '69cff82a7d358ce90f3e6691',
        products: [
          {
            count: 1,
            _id: '69cff8a67d358ce90f3e66ac',
            product: '6428eb43dc1175abc65ca0b3',
            price: 149,
          },
        ],
        createdAt: '2026-04-03T17:28:06.911Z',
        updatedAt: '2026-04-03T17:28:07.078Z',
        __v: 0,
        totalCartPrice: 149,
      },
    };
    cartServices.sendProductInCart('6428eb43dc1175abc65ca0b3').subscribe({
      next: (resp) => {
        expect(resp).toBeTruthy('Not return response');
        expect(resp.data.products[0].product).toBe('6428eb43dc1175abc65ca0b3', 'unexpected ');
      },
    });
    const req = httpController.expectOne(`${APIS_KYS.CART.data}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual('6428eb43dc1175abc65ca0b3');
    req.flush(mokeData);
  });
});
