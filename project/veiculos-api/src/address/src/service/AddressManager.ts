import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { AddressDAO } from "./AddressDAO"

@Injectable()
export class AddressManager {
    constructor(
        @InjectRepository(AddressDAO) private _addressDAO: AddressDAO
    ) { }

    async findOne(code: number) {
        return this._addressDAO.findOne(code)
    }
}