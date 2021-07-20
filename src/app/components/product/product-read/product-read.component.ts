import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  produtos: Product[]

  displayedColumns = ['id', 'nome', 'preco', 'acao'];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {} 

  ngOnInit(): void {    
    this.productService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }
}
