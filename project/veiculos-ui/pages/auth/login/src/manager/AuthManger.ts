import { AuthRequestDTO } from "./dtos/requests/AuthRequestDTO"
import AuthHttpUtil from "./utils/AuthHttpUtil"

export default abstract class AuthManger {

    static async getAuth(dto: AuthRequestDTO) {

        await AuthHttpUtil.getAuth({ username: dto.username, password: dto.password })

        if (window.sessionStorage.getItem('token')) {
            window.location.assign("/autocar")
        }

    }

}