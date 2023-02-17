import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { InjectRepository } from "@nestjs/typeorm"
import * as bcrypt from 'bcrypt'
import { PersonModel } from "src/person/src/models/PersonModel"
import { AuthDAO } from "../dao/AuthDAO"
import { AuthRequestDTO } from "../dtos/request/AuthRequestDTO"
import { AuthModel } from "../models/AuthModel"
import { jwtConstants } from "./constants"

@Injectable()
export class AuthManager {

    constructor(
        @InjectRepository(AuthDAO) private _authDAO: AuthDAO,
        private _jwtService: JwtService
    ) { }

    async validateUser(dto: AuthRequestDTO): Promise<PersonModel> {

        const user: AuthModel = await this._authDAO.getByUsername(dto.username)

        if (user && await bcrypt.compare(dto.password, user.password)) {
            return user.person
        }

        return null
    }

    async login(user: any) {

        const payload = { code: user.code, username: user.name }

        return {
            access_token: this._jwtService.sign(payload, { privateKey: jwtConstants.secret })
        }
    }

}