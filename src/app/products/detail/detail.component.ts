import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  product: any = {};
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.product = this.productsService.getProductById(Number(params['id']));
    })
  }


}
