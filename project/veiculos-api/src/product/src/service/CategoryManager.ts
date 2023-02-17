import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CategorySaveResquestDTO } from '../dto/request/CategorySaveResquestDTO'
import { CategoryModel } from '../model/CategoryModel'
import { CategoryDAO } from './CategoryDAO'

@Injectable()
export class CategoryManager {
    constructor(
        @InjectRepository(CategoryDAO) private _categoryDAO: CategoryDAO,
    ) { }

    async search(): Promise<CategoryModel[]> {
        return this._categoryDAO.search()
    }

    async findAll() {
        return this._categoryDAO.find()
    }

    async findOne(code: number): Promise<CategoryModel> {

        const categoryModel = await this._categoryDAO.findOne(code, { relations: ['product'] })

        if (!categoryModel)
            throw new NotFoundException(`Categoria de código ${code} não foi encontrada.`)

        return categoryModel
    }

    async save(dto: CategorySaveResquestDTO): Promise<CategoryModel> {

        const categoryModel = await this._categoryDAO.findOne({ where: { name: dto.name } })

        if (categoryModel)
            throw new BadRequestException('Já existe uma categoria cadastrada com este nome.')

        const categoryModelSave: CategoryModel = {
            name: dto.name
        }

        const categoryModelSaved = await this._categoryDAO.save(categoryModelSave)

        return this._categoryDAO.findOne(categoryModelSaved.code, { relations: ['product'] })
    }

    async update(code: number, dto: CategorySaveResquestDTO): Promise<CategoryModel> {

        const categoryModel = await this._categoryDAO.findOne(code, { relations: ['product'] })

        if (!categoryModel)
            throw new NotFoundException(`Categoria de código ${code} não foi encontrada.`)

        const categoryModelUpdate: CategoryModel = {
            ...categoryModel,
            name: dto.name
        }

        return this._categoryDAO.save(categoryModelUpdate)
    }

    async delete(code: number): Promise<void> {

        const categoryModel = await this._categoryDAO.findOne(code)

        if (!categoryModel)
            throw new NotFoundException(`Categoria de código ${code} não foi encontrada.`)

        this._categoryDAO.delete(categoryModel)
    }
}
