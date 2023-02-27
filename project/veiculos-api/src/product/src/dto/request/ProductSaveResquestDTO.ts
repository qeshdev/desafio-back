import { IsNotEmpty, IsOptional } from "class-validator"
import { AddressSaveRequestDTO } from "src/address/src/dto/request/AddressSaveRequestDTO"

export class ProductSaveResquestDTO {

    @IsNotEmpty()
    name: string
  
    @IsNotEmpty()
    image: string
  
    @IsNotEmpty()
    whatsapp: string
  
    @IsNotEmpty()
    value: number
  
    @IsNotEmpty()
    categoryCode: number

    @IsOptional()
    address?:AddressSaveRequestDTO
}