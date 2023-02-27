export class AddressItemResponseDTO {

    code: number
    zipCode: string
    road: string
    complement: string
    neighborhood: string
    city: string
    state: string
}

export interface VehicleResponseDTO {
    code: number
    name: string
    image: string
    whatsapp: string
    value: number
    address: AddressItemResponseDTO   
}

export interface Product {

    code: number
    category: string
    vehicle: VehicleResponseDTO[]

}


