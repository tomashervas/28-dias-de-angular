import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, QueryParamsHandling } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductsService } from 'src/app/products.service';
import { ProductsResponse, Product } from 'src/models/Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  currentPage!: number;
  totalPages!: number;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activatedRoute.queryParamMap.pipe(
      switchMap((queryParams: ParamMap) => {
        const page = queryParams.get('page')
        this.currentPage = page ? +page : 1
        return this.productsService.getProducts(this.currentPage)
      })).subscribe((response: ProductsResponse) => {
        this.products = response.data
        this.currentPage = response.currentPage
        this.totalPages = response.totalPages
      })

  }
}
