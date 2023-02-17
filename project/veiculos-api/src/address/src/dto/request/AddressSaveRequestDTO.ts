import { IsOptional } from "class-validator"

export class AddressSaveRequestDTO{

    @IsOptional()
    code: number

    @IsOptional()
    cep: string

    @IsOptional()
    logradouro: string

    @IsOptional()
    complemento: string

    @IsOptional()
    bairro: string

    @IsOptional()
    localidade: string

    @IsOptional()
    uf: string
}