import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://product-api:product1234@cluster0.fgvik.mongodb.net/products',
      {
        useFindAndModify: false,
      },
    ),
    MongooseModule.forRoot(
      'mongodb+srv://product-api:product1234@cluster0.fgvik.mongodb.net/type',
      {
        useFindAndModify: false,
      },
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // Nada
}
