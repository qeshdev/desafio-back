import { AddressModel } from "../../model/AddressModel"

export class AddressItemResponseDTO {

    code: number
    zipCode: string
    road: string
    complement: string
    neighborhood: string
    city: string
    state: string

    constructor(data: AddressModel) {

        this.code = data.code
        this.zipCode = data.cep
        this.road = data.logradouro
        this.neighborhood = data.bairro
        this.city = data.localidade
        this.state = data.uf

    }
}