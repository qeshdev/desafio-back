import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { PersonRequestDTO } from "src/person/src/dtos/request/PersonRequestDTO"
import { PersonManager } from "src/person/src/services/PersonManager"

@Controller('person')
export class PersonController {

    constructor(
        private _personManager: PersonManager
    ) { }

    @Post()
    async save(@Body() dto: PersonRequestDTO) {
        return this._personManager.save(dto)
    }

    @Get(':code')
    async findOne(@Param('code') code: number) {
        return this._personManager.findOne(code)
    }

}