import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, ViewChild} from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  produtos: Product[]
  dadosProdutos = this.productService.read().subscribe(produtos => { this.produtos = produtos});
  dataSource = new MatTableDataSource([this.dadosProdutos]);  
  displayedColumns = ['id', 'nome', 'quantidade', 'dataDeVencimento', 'categoria', 'acao'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {} 

  ngOnInit(): void {    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
