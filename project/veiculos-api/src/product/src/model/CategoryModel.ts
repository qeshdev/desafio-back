import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ProductModel } from './ProductModel'

@Entity('category')
export class CategoryModel {
    
    @PrimaryGeneratedColumn()
    code?: number

    @Column({ type: 'varchar', unique: true })
    name: string

    @OneToMany(() => ProductModel, (product) => product.categoryCode)
    product?: ProductModel[]
}
