import { Controller, Get, Param, Post, Body, Put } from "@nestjs/common";

import { ProductService } from "./products.service";

import { ProductInterface } from "./products.interface";

@Controller('products')
export class ProdutctController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async findAll() {
        const products = await this.productService.findAll();

        if (!products) {
            return { error: 'products not found' }
        }

        return products;
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const product = await this.productService.findById(+id);

        if (!product) {
            return { error: 'product not found' }
        }

        return product;
    }

    @Post()
    async createProduct(@Body() product: ProductInterface) {
        const { name, type } = product;

        if (!name || !type) {
            return { error: 'name and type is requireds' }
        }

        const newProduct = await this.productService.create(product);

        if (!newProduct) {
            return { error: 'product is not created' }
        }

        return newProduct;
    }

    @Put(':id')
    async updateProduct(@Param('id') id: string, @Body() product: ProductInterface) {
        const findProduct = await this.productService.findById(+id);

        if (!findProduct) {
            return { error: 'product not found' }
        }

        const newProduct = await this.productService.update(+id, product);

        if (!newProduct) {
            return { error: 'product is not updated' }
        }

        return newProduct;
    }
}