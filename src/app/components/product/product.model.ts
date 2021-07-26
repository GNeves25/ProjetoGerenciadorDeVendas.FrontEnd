import { EnumCategoria } from './produt.enum.categoria';

export interface Product {
    id?: number,
    nome: string,
    quantidade: number,
    dataDeVencimento: Date,
    categoria: EnumCategoria
}