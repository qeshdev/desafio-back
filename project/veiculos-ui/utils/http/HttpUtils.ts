import axios from "axios"
import { HeaderRequestDTO } from "./interfaces/HeaderRequest"

export class HttpUtils {

    static async findOne(url: string, headers?: HeaderRequestDTO) {
        try {
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
        } catch (error) {
            return null
        }

    }

    static async findAll<T>(url: string, headers?: HeaderRequestDTO): Promise<T[]> {

        try {

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

        } catch (error) {
            return null
        }

    }

    static async post<T>(url: string, data: any, headers?: HeaderRequestDTO): Promise<any> {
        try {
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

        } catch (error) {
            return null
        }
    }

    static async delete(url: string, headers?: HeaderRequestDTO): Promise<void> {

        try {
            const response = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${headers?.token}`,
                    schema: `${headers?.schema}`
                }
            })
        } catch (error) {
            return null
        }
    }

}

