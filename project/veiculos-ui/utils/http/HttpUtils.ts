import axios from "axios"
import { HeaderRequestDTO } from "./interfaces/HeaderRequest"

export class HttpUtils {

    static async findOne(url: string, headers?: HeaderRequestDTO) {
        let result
        await axios({
            method: 'GET',
            url: url,
            headers: {
                Authorization: `Bearer ${headers?.token}`,
                schema: `${headers?.schema}`
            }
        }).then(function (response) {
            result = response.data
        }).catch(() => false)
        return result

    }

    static async findAll<T>(url: string, headers?: HeaderRequestDTO): Promise<T[]> {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${headers?.token}`,
                schema: `${headers?.schema}`
            },
            mode: 'cors',
            cache: 'default'
        })
        const data: T[] = await response.json()

        return data

    }

    static async post<T>(url: string, data: any, headers?: HeaderRequestDTO): Promise<any> {

        let res
        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${headers?.token}`,
                schema: `${headers?.schema}`
            }
        }).then((response) => {
            res = response.data
        })

        return res
    }

    static async delete(url: string, headers?: HeaderRequestDTO): Promise<void> {

        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${headers?.token}`,
                schema: `${headers?.schema}`
            }
        })
    }

}

