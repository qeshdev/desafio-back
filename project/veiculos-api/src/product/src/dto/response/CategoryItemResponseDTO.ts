import { CategoryModel } from '../../model/CategoryModel'
import { ProductItemResponseDTO } from './ProductItemResponseDTO'

export class CategoryItemResponseDTO {

    code: number
    categoria: string
    imoveis: ProductItemResponseDTO[]

    constructor(data: CategoryModel) {
        this.code = data.code
        this.categoria = data.name
        
        if (data.product)
            this.imoveis = data.product.map((item) => new ProductItemResponseDTO(item))

    }
}
