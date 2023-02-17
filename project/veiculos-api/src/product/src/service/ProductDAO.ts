import { EntityRepository, Repository } from 'typeorm'
import { ProductModel } from '../model/ProductModel'

@EntityRepository(ProductModel)
export class ProductDAO extends Repository<ProductModel> {}
