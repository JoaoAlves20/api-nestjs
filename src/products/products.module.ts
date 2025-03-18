import { Module } from "@nestjs/common";

import { ProductService } from "./products.service";
import { ProdutctController } from "./products.controller";

@Module({
    imports: [],
    controllers: [ProdutctController],
    providers: [ProductService]
})
export class ProductModule {}