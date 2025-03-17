import { Module } from "@nestjs/common";

import { ProductService } from "./products.service";

@Module({
    imports: [],
    controllers: [],
    providers: [ProductService]
})
export class ProductModule {}