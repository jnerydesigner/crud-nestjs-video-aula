import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductShema } from './schemas/product.schema';
import { TypeMongoDb, TypeMongoDbShema } from './schemas/type.chema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductShema,
      },
      {
        name: TypeMongoDb.name,
        schema: TypeMongoDbShema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {
  // Products Module
}
