import { IsOptional } from "class-validator"

export class ProductUpdateResquestDTO {

    @IsOptional()
    name: string
  
    @IsOptional()
    image: string
  
    @IsOptional()
    whatsapp: string
  
    @IsOptional()
    value: number
  
    @IsOptional()
    categoryCode: number
}