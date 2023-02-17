import { AddressModel } from "../../model/AddressModel"

export class AddressItemResponseDTO {

    code: number
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string

    constructor(data: AddressModel) {

        this.code = data.code
        this.cep = data.cep
        this.logradouro = data.logradouro
        this.bairro = data.bairro
        this.localidade = data.localidade
        this.uf = data.uf

    }
}