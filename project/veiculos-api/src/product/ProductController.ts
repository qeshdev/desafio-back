import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/src/services/JwtAuthGuard'
import { ProductSaveResquestDTO } from './src/dto/request/ProductSaveResquestDTO'
import { ProductUpdateResquestDTO } from './src/dto/request/ProductUpdateResquestDTO'
import { ProductItemResponseDTO } from './src/dto/response/ProductItemResponseDTO'
import { ProductListResponseDTO } from './src/dto/response/ProductListResponseDTO'
import { ProductManager } from './src/service/ProductManager'


@Controller('product')
export class ProductController {
    constructor(private readonly productManager: ProductManager) { }

    @Get()
    async sarch(): Promise<ProductListResponseDTO> {
        return new ProductListResponseDTO(await this.productManager.sarch())
    }

    @Get(':code')
    async findOne(@Param('code') code: number): Promise<ProductItemResponseDTO> {
        return new ProductItemResponseDTO(await this.productManager.findOne(code))
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Body() dto: ProductSaveResquestDTO): Promise<ProductItemResponseDTO> {
        return new ProductItemResponseDTO(await this.productManager.save(dto))
    }

    @UseGuards(JwtAuthGuard)
    @Put(':code')
    async update(@Param('code') code: number, @Body() dto: ProductUpdateResquestDTO): Promise<ProductItemResponseDTO> {
        return new ProductItemResponseDTO(await this.productManager.update(code, dto))
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':code')
    async delete(@Param('code') code: number): Promise<void> {
        await this.productManager.delete(code)
    }
}
