import { IsNotEmpty } from "class-validator"

export class AuthRequestDTO {

    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string

}