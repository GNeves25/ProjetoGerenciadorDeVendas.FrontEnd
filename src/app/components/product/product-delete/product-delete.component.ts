import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { EnumCategoria } from '../produt.enum.categoria';

interface Categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  produto: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.produto = product
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.produto.id).subscribe(() => {
      this.productService.showMessage('Produto Deletado com Sucesso')
      this.router.navigate(["/products"]);
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

  categorias: Categoria[] = [
    {value: EnumCategoria.Bebidas.toString(), viewValue: 'Bebidas'},
    {value: EnumCategoria.Carnes.toString(), viewValue: 'Carnes'},
    {value: EnumCategoria.FriosELaticinios.toString(), viewValue: 'FriosELaticinios'},
    {value: EnumCategoria.Higiene.toString(), viewValue: 'Higiene'},
    {value: EnumCategoria.Hortifruti.toString(), viewValue: 'Hortifruti'},
    {value: EnumCategoria.Limpeza.toString(), viewValue: 'Limpeza'},
    {value: EnumCategoria.Matinais.toString(), viewValue: 'Matinais'},
    {value: EnumCategoria.Mercearia.toString(), viewValue: 'Mercearia'},
    {value: EnumCategoria.Padaria.toString(), viewValue: 'Padaria'},
    {value: EnumCategoria.PetShop.toString(), viewValue: 'PetShop'},
    {value: EnumCategoria.UtilidadesDomesticas.toString(), viewValue: 'UtilidadesDomesticas'}
  ];

}
