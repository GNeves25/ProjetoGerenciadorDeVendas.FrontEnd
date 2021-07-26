import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { EnumCategoria } from '../produt.enum.categoria';

interface Categoria {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  produto: Product ={
    nome: "",
    quantidade: null,
    dataDeVencimento: null,
    categoria: 0
  };

  categorias: Categoria[] = [
    {value: 0, viewValue: 'Bebidas'},
    {value: 1, viewValue: 'Carnes'},
    {value: 2, viewValue: 'FriosELaticinios'},
    {value: 3, viewValue: 'Higiene'},
    {value: 4, viewValue: 'Hortifruti'},
    {value: 5, viewValue: 'Limpeza'},
    {value: 6, viewValue: 'Matinais'},
    {value: 7, viewValue: 'Mercearia'},
    {value: 8, viewValue: 'Padaria'},
    {value: 9, viewValue: 'PetShop'},
    {value: 10, viewValue: 'UtilidadesDomesticas'}
  ];

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {    
    this.productService.create(this.produto).subscribe(() => {
    this.productService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
  })   
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  
}
