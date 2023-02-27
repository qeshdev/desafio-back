import { Body, Controller, HttpCode, Post, Request, UseGuards } from "@nestjs/common"
import { AuthRequestDTO } from "src/auth/src/dtos/request/AuthRequestDTO"
import { AuthManager } from "src/auth/src/services/AuthManager"
import { LocalAuthGuard } from "src/auth/src/services/LocalAuthGuard"


@Controller('auth')
export class AuthController {

    constructor(
        private _authManager: AuthManager
    ) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @Post('login')
    async login(@Request() req,@Body() dto: AuthRequestDTO) {           
        return this._authManager.login(req.user)
    }

}