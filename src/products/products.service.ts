import { Injectable } from "@nestjs/common";

import { ProductInterface } from "./products.interface";

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: 'product 1', type: 'type 1', price: 1234.6 },
        { id: 2, name: 'product 2', type: 'type 2', price: 124.6 },
        { id: 3, name: 'product 3', type: 'type 3', price: 123.6 },
    ]

    findAll(): Promise<ProductInterface[]> {
        return new Promise((resolve) => {
            return resolve(this.products);
        })
    }

    findById(id: number): Promise<ProductInterface | any> {
        return new Promise((resolve) => {
            const findProduct = this.products.find(pdt => pdt.id === id);
            return resolve(findProduct);
        })
    }

    create(product: ProductInterface): Promise<ProductInterface | any> {
        return new Promise((resolve) => {
            this.products.push({ ...product, id: this.products.length + 1 });
            const findProduct = this.products.find(pdt => pdt.id === this.products.length);

            return resolve(findProduct);
        })
    }

    update(id: number, product: ProductInterface): Promise<ProductInterface | any> {
        return new Promise((resolve) => {
            const index = this.products.findIndex(pdt => pdt.id === id)
            this.products[index] = { ...this.products[index], ...product, id }
            
            const findProduct = this.products.find(pdt => pdt.id === id)
            return resolve(findProduct)
        })
    }

    delete(id: number): Promise<ProductInterface[]> {
        return new Promise((resolve) => {
            const index = this.products.findIndex(pdt => pdt.id === id)

            if (index === -1) {
                return { error: 'product not found' }
            }

            return resolve(this.products.splice(index, 1))
        })
    }
}