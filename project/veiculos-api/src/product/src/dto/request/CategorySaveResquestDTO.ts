import { IsNotEmpty } from "class-validator"

export class CategorySaveResquestDTO {

    @IsNotEmpty()
    name: string
}