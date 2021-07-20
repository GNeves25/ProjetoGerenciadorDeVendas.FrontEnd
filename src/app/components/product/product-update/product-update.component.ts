import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  produto: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ProductUpdateComponent>) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(produto => {
      this.produto = produto;
    });
  }

  updateProduct(): void {
    this.productService.update(this.produto).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso');
      this.router.navigate(['/products'])
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
