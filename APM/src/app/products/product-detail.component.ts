import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: [ './product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    imageWidth: number = 100;
    imageMargin: number = 5;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {}

    ngOnInit() {
        /**
     * the + converts the string to a number
     * it is a js shortcut.
     */
        const id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`;
        this._productService
        .getProduct(id)
        .subscribe((p) => {
            this.product = p;
        });
        // this.product = {
        //     productId: 1,
        //     productName: 'Leaf Rake',
        //     productCode: 'GDN-0011',
        //     releaseDate: 'March 19, 2016',
        //     description: 'Leaf rake with 48-inch wooden handle.',
        //     price: 19.95,
        //     starRating: 3.2,
        //     imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
        // };
    }

    onBack(): void {
        this._router.navigate([ '/products' ]);
    }
}
