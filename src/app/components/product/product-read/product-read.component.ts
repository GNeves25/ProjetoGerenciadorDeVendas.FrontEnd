import { ProductUpdateComponent } from './../product-update/product-update.component';
import { ProductDeleteDialogComponent } from './../product-delete-dialog/product-delete-dialog.component';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  produtos: Product[]

  displayedColumns = ['id', 'nome', 'preco', 'acao'];

  constructor(private productService: ProductService,
  public dialog: MatDialog) {} 

  ngOnInit(): void {    
    this.productService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }
  
  openDialogUpdate() {
    const dialogRef = this.dialog.open(ProductUpdateComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(ProductDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
