import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { TypeMongoDb, TypeMongoDocument } from './schemas/type.chema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(TypeMongoDb.name)
    private typeModel: Model<TypeMongoDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {
    //  Contructor
  }
  create(createProductDto: CreateProductDto): Promise<Product> {
    const createProduct = new this.productModel(createProductDto);
    return createProduct.save();
  }

  createType(createTypeDto: CreateTypeDto): Promise<TypeMongoDb> {
    const createType = new this.typeModel(createTypeDto);
    return createType.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findAllTypes(): Promise<TypeMongoDb[]> {
    return await this.typeModel.find().exec();
  }

  async findOne(id: string) {
    return await this.productModel.findById(id);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateProductDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.productModel.findByIdAndRemove({ _id: id }).exec();
  }
}
