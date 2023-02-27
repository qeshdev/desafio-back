import { Controller, Get, Param } from "@nestjs/common"
import { AddressManager } from "./src/service/AddressManager"

@Controller('address')
export class AddressController {
    constructor(private readonly _addressManager: AddressManager) { }

    @Get(':code')
    async finOne(@Param('code') code: number) {
        return this._addressManager.findOne(code)
    }
}