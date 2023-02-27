import { EntityRepository, getRepository, Repository } from 'typeorm'
import { CategoryModel } from '../model/CategoryModel'

@EntityRepository(CategoryModel)
export class CategoryDAO extends Repository<CategoryModel> {

  async search(): Promise<CategoryModel[]> {
    const query = getRepository(CategoryModel).createQueryBuilder('category')
    query.leftJoinAndSelect('category.product', 'product')
    query.leftJoinAndSelect('product.address', 'address')
    return query.getMany()
  }
  
}
