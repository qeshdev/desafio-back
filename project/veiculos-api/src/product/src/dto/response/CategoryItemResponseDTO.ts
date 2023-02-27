import { CategoryModel } from '../../model/CategoryModel'
import { ProductItemResponseDTO } from './ProductItemResponseDTO'

export class CategoryItemResponseDTO {

    code: number
    category: string
    vehicle: ProductItemResponseDTO[]

    constructor(data: CategoryModel) {
        this.code = data.code
        this.category = data.name
        
        if (data.product)
            this.vehicle = data.product.map((item) => new ProductItemResponseDTO(item))

    }
}
