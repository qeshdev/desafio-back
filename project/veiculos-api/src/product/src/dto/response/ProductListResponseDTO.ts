import { ProductModel } from '../../model/ProductModel'
import { ProductItemResponseDTO } from './ProductItemResponseDTO'

export class ProductListResponseDTO {

    imoveis: ProductItemResponseDTO[]

    constructor(data: ProductModel[]) {
        this.imoveis = data.map((product) => new ProductItemResponseDTO(product))
    }
}
