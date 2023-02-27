import { AddressItemResponseDTO } from 'src/address/src/dto/response/AddressItemResponseDTO'
import { ProductModel } from '../../model/ProductModel'
import { CategoryItemResponseDTO } from './CategoryItemResponseDTO'

export class ProductItemResponseDTO {
    code: number
    name: string
    image: string
    whatsapp: string
    value: number
    address: AddressItemResponseDTO
    category: CategoryItemResponseDTO

    constructor(data: ProductModel) {
        this.code = data.code
        this.name = data.name
        this.image = data.image
        this.whatsapp = data.whatsapp
        this.value = data.value

        if (data.address)
            this.address = new AddressItemResponseDTO(data.address)

        if (data.categoryCode)
            this.category = new CategoryItemResponseDTO(data.categoryCode)


    }
}
