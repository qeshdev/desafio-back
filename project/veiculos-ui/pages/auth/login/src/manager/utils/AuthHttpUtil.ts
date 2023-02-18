import { HttpUtils } from "../../../../../../utils/http/HttpUtils"
import { AuthRequestDTO } from "../dtos/requests/AuthRequestDTO"

export default abstract class AuthHttpUtil {

    static async getAuth(dto: AuthRequestDTO) {
        const data = await HttpUtils.post(`http://localhost:3001/auth/login`, dto)
        window.sessionStorage.setItem('token', data.access_token)       
        return data
    }

}