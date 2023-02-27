import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CategorySaveResquestDTO } from './src/dto/request/CategorySaveResquestDTO'
import { CategoryItemResponseDTO } from './src/dto/response/CategoryItemResponseDTO'
import { CategoryListResponseDTO } from './src/dto/response/CategoryListResponseDTO '
import { CategoryManager } from './src/service/CategoryManager'

@Controller('categorys')
export class CategoryController {
    constructor(private readonly categoryManager: CategoryManager) { }
    
    @Get('search')
    async search(): Promise<CategoryListResponseDTO> {
        return new CategoryListResponseDTO(await this.categoryManager.search())
    }

    @Get()
    async findAll(): Promise<CategoryListResponseDTO> {
        return new CategoryListResponseDTO(await this.categoryManager.findAll())
    }

    @Get(':code')
    async findOne(@Param('code') code: number): Promise<CategoryItemResponseDTO> {
        return new CategoryItemResponseDTO(await this.categoryManager.findOne(code))
    }

    @Post()
    async save(@Body() dto: CategorySaveResquestDTO) {
        return new CategoryItemResponseDTO(await this.categoryManager.save(dto))
    }

    @Put(':code')
    async update(@Param('code') code: number, @Body() dto: CategorySaveResquestDTO) {
        return new CategoryItemResponseDTO(await this.categoryManager.update(code, dto))
    }

    @Delete(':code')
    async delete(@Param('code') code: number): Promise<void> {
        this.categoryManager.delete(code)
    }
}
