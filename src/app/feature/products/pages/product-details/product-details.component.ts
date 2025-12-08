import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CardDetailsProductComponent } from '../../components/card-details-product/card-details-product.component';
import { RelatedPeoductComponent } from '../../components/related-peoduct/related-peoduct.component';
import { ViewportScroller } from '@angular/common';
import { LoadingScreenComponent } from '../../../../shared/components/loading-screen/loading-screen.component';
import { Details } from '../../interfaces/IPRoductDetails';

@Component({
  selector: 'app-product-details',
  imports: [CardDetailsProductComponent, RelatedPeoductComponent, LoadingScreenComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  private readonly activeRouter = inject(ActivatedRoute);
  public readonly productsService = inject(ProductsService);
  public readonly viewportScroller = inject(ViewportScroller);
  load = true;
  productDetails!: Details;
  productId!: string;
  constructor() {
    // this.productId = this.activeRouter.snapshot.paramMap.get('id')!;
    this.activeRouter.paramMap.subscribe((parma) => {
      this.productId = parma.get('id')!;

      this.getProductByID();
    });
    this.getProductByID();
    console.log(this.productsService.productDetails);
  }
  getProductByID() {
    this.load = true;
    this.productsService.getProductById(this.productId).subscribe({
      next: (resp) => {
        this.productDetails = resp.data;
        this.load = false;
      },
    });

    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
