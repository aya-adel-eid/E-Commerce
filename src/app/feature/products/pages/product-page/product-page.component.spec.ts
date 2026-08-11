import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPageComponent } from './product-page.component';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductsService } from '../../services/products.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../categories/services/categories.service';
import { AuthService } from '../../../auth/services/auth.service';
import { WishlistService } from '../../../wishlist/services/wishlist.service';
import { ViewportScroller } from '@angular/common';
import { of } from 'rxjs';

describe('Product Page Component', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let el: DebugElement;
  let categoryService: CategoriesService;
  let wishlistServices: WishlistService;
  let viewportScroller: ViewportScroller;
  let productServices: ProductsService;
  const activatedRouteMock = {
    snapshot: {
      queryParamMap: {
        get: jasmine.createSpy('get').and.returnValue(null),
      },
    },
  };
  const productServicesSpy = jasmine.createSpyObj('ProductsService', ['getAllProducts']);
  const categoryServicesSpy = jasmine.createSpyObj('CategoriesService', ['getAllCategories']);
  const wishlistServicesSpy = jasmine.createSpyObj('WishlistServices', [
    'getAllProductsInWishlist',
    'reset',
  ]);
  const viewportScrollerSpy = jasmine.createSpyObj('ViewportScroller', ['scrollToPosition']);
  function createComponent() {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductPageComponent],
      providers: [
        provideHttpClientTesting(),

        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        },
        { provide: CategoriesService, useValue: categoryServicesSpy },
        { provide: WishlistService, useValue: wishlistServicesSpy },
        { provide: ViewportScroller, useValue: viewportScrollerSpy },
        { provide: ProductsService, useValue: productServicesSpy },
      ],
    }).compileComponents();
    // fixture = TestBed.createComponent(ProductPageComponent);
    // component = fixture.componentInstance;
    // el = fixture.debugElement;
    categoryService = TestBed.inject(CategoriesService);
    wishlistServices = TestBed.inject(WishlistService);
    viewportScroller = TestBed.inject(ViewportScroller);
    productServices = TestBed.inject(ProductsService);
  });
  // test component created
  it('Should create component', () => {
    createComponent();
    expect(component).toBeDefined('Unexpected');
  });
  // test query page
  it('should set page=1 when no query param exists', () => {
    activatedRouteMock.snapshot.queryParamMap.get.and.returnValue(null);
    createComponent();
    expect(component.page).toBe(1);
  });
  it('should set page from query param if exists', () => {
    activatedRouteMock.snapshot.queryParamMap.get.and.returnValue('3');
    createComponent();
    expect(component.page).toBe(3, 'unexpected 3!');
    console.log(component.page);
  });
  it('Should call getAllProducts&getAllCategory on ngOnInit', () => {
    productServicesSpy.getAllProducts.and.returnValue(
      of({
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
      }),
    );
    categoryServicesSpy.getAllCategories.and.returnValue(
      of({
        results: 1,
        metadata: {
          currentPage: 1,
          numberOfPages: 1,
          limit: 40,
        },
        data: [
          {
            _id: '6439d61c0049ad0b52b90051',
            name: 'Music',
            slug: 'music',
            image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511964020.jpeg',
            createdAt: '2023-04-14T22:39:24.365Z',
            updatedAt: '2023-04-14T22:39:24.365Z',
          },
        ],
      }),
    );
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    spyOn(component, 'getAllProducts').and.callThrough();
    spyOn(component, 'getAllCategory').and.callThrough();
    fixture.detectChanges();
    // component.ngOnInit();
    expect(component.getAllCategory).toHaveBeenCalled();
    expect(component.getAllProducts).toHaveBeenCalled();
  });
  // it('should call productsService.getAllProducts with correct params', () => {
  //   createComponent();
  //   component.page = 1;
  //   component.limit = 12;
  //   component.getAllProducts();
  //   expect(productServicesSpy.getAllProducts).toHaveBeenCalledWith(1, 12);
  // });
});
