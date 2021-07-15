import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateTypeDto } from './dto/create-type.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
    /// eetetet
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Post('type')
  createType(@Body() createTypeDto: CreateTypeDto) {
    return this.productsService.createType(createTypeDto);
  }

  @Get()
  findAll() {
    // return 'Hello Word Daqui';
    return this.productsService.findAll();
  }

  @Get('type')
  findAllTypes() {
    return this.productsService.findAllTypes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
