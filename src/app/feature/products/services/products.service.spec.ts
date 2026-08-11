import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { APIS_KYS } from '../../../core/contstants/APIS_KYS';
import { IAllProducts, Products } from '../interfaces/IAllProducts';
import { IPRoductDetails } from '../interfaces/IPRoductDetails';

describe('ProductsService testing', () => {
  let productsService: ProductsService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    productsService = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });
  it('Should return all products', () => {
    let mokeProduct: IAllProducts = {
      results: 2,
      metadata: {
        currentPage: 1,
        numberOfPages: 1,
        limit: 2,
        nextPage: 2,
      },
      data: [
        {
          sold: 150,
          images: [
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg',
          ],
          subcategory: [
            {
              _id: '6407f1bcb575d3b90bf95797',
              name: "Women's Clothing",
              slug: "women's-clothing",
              category: '6439d58a0049ad0b52b9003f',
            },
          ],
          ratingsQuantity: 18,
          _id: '6428ebc6dc1175abc65ca0b9',
          title: 'Woman Shawl',
          slug: 'woman-shawl',
          description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
          quantity: 220,
          price: 149,
          imageCover:
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
          category: {
            _id: '6439d58a0049ad0b52b9003f',
            name: "Women's Fashion",
            slug: "women's-fashion",
            image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg',
          },
          brand: {
            _id: '64089bbe24b25627a253158b',
            name: 'DeFacto',
            slug: 'defacto',
            image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png',
          },
          ratingsAverage: 4.8,
          createdAt: '2023-04-02T02:43:18.400Z',
          updatedAt: '2026-04-02T15:43:05.285Z',
          id: '6428ebc6dc1175abc65ca0b9',
        },
        {
          sold: 213,
          images: [
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
          ],
          subcategory: [
            {
              _id: '6407f1bcb575d3b90bf95797',
              name: "Women's Clothing",
              slug: "women's-clothing",
              category: '6439d58a0049ad0b52b9003f',
            },
          ],
          ratingsQuantity: 18,
          _id: '6428eb43dc1175abc65ca0b3',
          title: 'Woman Shawl',
          slug: 'woman-shawl',
          description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
          quantity: 220,
          price: 149,
          imageCover:
            'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
          category: {
            _id: '6439d58a0049ad0b52b9003f',
            name: "Women's Fashion",
            slug: "women's-fashion",
            image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg',
          },
          brand: {
            _id: '64089bbe24b25627a253158b',
            name: 'DeFacto',
            slug: 'defacto',
            image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png',
          },
          ratingsAverage: 4.8,
          createdAt: '2023-04-02T02:41:07.506Z',
          updatedAt: '2026-04-02T15:43:05.285Z',
          id: '6428eb43dc1175abc65ca0b3',
        },
      ],
    };
    productsService.getAllProducts().subscribe({
      next: (resp) => {
        expect(resp).toBeTruthy('No products returned');
        expect(resp.data.length).toBe(2, 'unexpected two');
        expect(resp.data[0].subcategory[0].category).toBe('6439d58a0049ad0b52b9003f');
      },
    });

    const req = httpController.expectOne(`${APIS_KYS.PRODUCTS.allProducts}?page=1&limit=null`);
    expect(req.request.method).toEqual('GET');
    req.flush(mokeProduct);
  });
  it('should product by id', () => {
    const mokeProductData: IPRoductDetails = {
      data: {
        sold: 160,
        images: [
          'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
          'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
          'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
          'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg',
        ],
        subcategory: [
          {
            _id: '6407f1bcb575d3b90bf95797',
            name: "Women's Clothing",
            slug: "Women's Clothing",
            category: '6439d58a0049ad0b52b9003f',
          },
        ],
        ratingsQuantity: 18,
        _id: '6428ebc6dc1175abc65ca0b9',
        title: 'Woman Shawl',
        slug: 'woman-shawl',
        description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
        quantity: 220,
        price: 149,
        imageCover:
          'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
        category: {
          _id: '6439d58a0049ad0b52b9003f',
          name: "Women's Fashion",
          slug: "women's-fashion",
          image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg',
        },
        brand: {
          _id: '64089bbe24b25627a253158b',
          name: 'DeFacto',
          slug: 'defacto',
          image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png',
        },
        ratingsAverage: 4.8,
        createdAt: '2023-04-02T02:43:18.400Z',
        updatedAt: '2026-04-03T00:26:39.180Z',
        __v: 0,
        reviews: [],
        id: '6428ebc6dc1175abc65ca0b9',
      },
    };
    productsService.getProductById('6428ebc6dc1175abc65ca0b9').subscribe({
      next: (resp) => {
        expect(resp).toBeTruthy('no product return');
        expect(resp.data.brand.name).toBe('DeFacto', 'unexpected this name');
      },
    });
    const req = httpController.expectOne(
      `${APIS_KYS.PRODUCTS.allProducts}/6428ebc6dc1175abc65ca0b9`,
    );
    expect(req.request.method).toBe('GET');
    req.flush(mokeProductData);
  });
  afterEach(() => {
    httpController.verify();
  });
});
