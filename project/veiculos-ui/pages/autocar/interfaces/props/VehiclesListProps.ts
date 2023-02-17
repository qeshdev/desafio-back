import { VehicleResponseDTO } from "../../manager/dtos/responses/ProductResponseDTO"
import { CarPropertyProps } from "./CarPropertyProps"

export class VehiclesListProps  {
    categoryName: string
    vehicles: VehicleResponseDTO[]
}