import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ProductSaveResquestDTO } from '../dto/request/ProductSaveResquestDTO'
import { ProductModel } from '../model/ProductModel'
import { CategoryDAO } from './CategoryDAO'
import { ProductDAO } from './ProductDAO'

@Injectable()
export class ProductManager {
    constructor(
        @InjectRepository(ProductDAO) private _productDAO: ProductDAO,
        @InjectRepository(CategoryDAO) private _categoryDAO: CategoryDAO,
    ) { }

    async sarch(): Promise<ProductModel[]> {
        return this._productDAO.find({ relations: ['categoryCode', 'address'] })
    }

    async findOne(code: number): Promise<ProductModel> {
        return this._productDAO.findOne(code, { relations: ['categoryCode'] })
    }

    async save(dto: ProductSaveResquestDTO): Promise<ProductModel> {

        const categoryModel = await this._categoryDAO.findOne(dto.categoryCode)

        if (!categoryModel)
            throw new NotFoundException(`Categoria de código ${categoryModel.code} não foi encontrada.`)

        const productModel: ProductModel = {
            name: dto.name,
            image: dto.image,
            value: dto.value,
            whatsapp: dto.whatsapp,
            categoryCode: categoryModel
        }

        if (dto.address)
            productModel.address = dto.address


        return this._productDAO.save(productModel)
    }

    async update(code: number, dto: ProductSaveResquestDTO): Promise<ProductModel> {

        const productModel = await this._productDAO.findOne(code)

        if (!productModel)
            throw new NotFoundException(`Produto do código ${code} não foi encontrado.`)

        const categoryModel = await this._categoryDAO.findOne(dto.categoryCode)

        if (!categoryModel)
            throw new NotFoundException(`Categoria de código ${categoryModel.code} não foi encontrada.`)

        const productModelUpdate: ProductModel = {
            ...productModel,
            name: dto.name,
            image: dto.image,
            value: dto.value,
            whatsapp: dto.whatsapp,
            categoryCode: categoryModel
        }

        const productModelUpdated = await this._productDAO.save(productModelUpdate)

        return this._productDAO.findOne(productModelUpdated.code)

    }

    async delete(code: number) {

        const productModel = await this._productDAO.findOne(code)

        if (!productModel)
            throw new NotFoundException(`Produto do código ${code} não foi encontrado.`)

        await this._productDAO.delete(productModel)
    }

}
