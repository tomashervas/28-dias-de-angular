import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  product: any = {};
  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.productsService.getProductById( Number(params.get('id')) )
      )
    ).subscribe((product) => this.product = product);
  }

  onDelete() {
    this.productsService.deleteProduct(this.product.id).subscribe({
      next: () => this.router.navigate(['/products']),
      error: (error) => console.log(error)
    });
  }

}
