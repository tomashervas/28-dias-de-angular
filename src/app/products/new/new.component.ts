import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {

  id: number | undefined;

  addForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    price: [0, [Validators.required, Validators.min(0)]],
    description: ['']
  })


  constructor(private fb: FormBuilder, private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      if (this.id) {
        this.productsService.getProductById(this.id).subscribe((product) => {
          this.addForm.patchValue({
            name: product.name,
            price: product.price,
            description: product.description
          })
        })
      }
    })
  }



  onSubmit() {
    const product: Product = {
      name: this.addForm.value.name!,
      price: this.addForm.value.price!,
      description: this.addForm.value.description ?? undefined
    }
    if (this.id) {
      return this.productsService.updateProduct(this.id, product).subscribe(() => {
        this.router.navigate(['/products']);
        this.addForm.reset();
      })
    }
    return this.productsService.createProduct(product).subscribe(() => {
      this.router.navigate(['/products']);
      this.addForm.reset();
    })
    console.log(product);
  }
}
