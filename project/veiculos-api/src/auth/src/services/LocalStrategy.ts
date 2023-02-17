import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from 'passport-local'
import { PersonModel } from "src/person/src/models/PersonModel"
import { AuthManager } from "./AuthManager"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthManager) {
        super()
    }

    async validate(username: string, password: string): Promise<PersonModel> {

        const user = await this.authService.validateUser({ username, password })

        if (!user) {
            throw new UnauthorizedException()
        }

        return user
    }
}