import { CategoryModel } from '../../model/CategoryModel'
import { CategoryItemResponseDTO } from './CategoryItemResponseDTO'

export class CategoryListResponseDTO {
  constructor(data: CategoryModel[]) {
    return data.map((item) => new CategoryItemResponseDTO(item))
  }
}
