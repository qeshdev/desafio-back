import { IsEmail, IsHash, IsNotEmpty } from "class-validator"


export class PersonRequestDTO {

    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsNotEmpty()
    phone: string

    @IsNotEmpty()
    cnpj: string

    @IsNotEmpty()
    cpf: string

    @IsNotEmpty()
    // @IsHash('md5')
    password: string
}