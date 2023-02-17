import { AddressItemResponseDTO } from 'src/address/src/dto/response/AddressItemResponseDTO'
import { ProductModel } from '../../model/ProductModel'
import { CategoryItemResponseDTO } from './CategoryItemResponseDTO'

export class ProductItemResponseDTO {
    code: number
    nome: string
    imagem: string
    whatsapp: string
    valor: number
    address: AddressItemResponseDTO
    categoria: CategoryItemResponseDTO

    constructor(data: ProductModel) {
        this.code = data.code
        this.nome = data.name
        this.imagem = data.image
        this.whatsapp = data.whatsapp
        this.valor = data.value

        if (data.address)
            this.address = new AddressItemResponseDTO(data.address)

        if (data.categoryCode)
            this.categoria = new CategoryItemResponseDTO(data.categoryCode)


    }
}
