import { HttpUtils } from "../../../../utils/http/HttpUtils"
import { Product } from "../dtos/responses/ProductResponseDTO"

export default abstract class HomeHttpUtil {


    static async getListItem(): Promise<Product[]> {
        const data: Product[] = await HttpUtils.findAll(`http://localhost:3001/categorys/search`)
        return data
    }

}