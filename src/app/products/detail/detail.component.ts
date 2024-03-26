import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  product: any = {};
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.productsService.getProductById( Number(params.get('id')) )
      )
    ).subscribe((product) => this.product = product);
  }




}
