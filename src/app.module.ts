import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USER_MONGO_DB}:${process.env.PASSWORD_MONGO_DB}@cluster0.fgvik.mongodb.net/products`,
      {
        useFindAndModify: false,
      },
    ),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USER_MONGO_DB}:${process.env.PASSWORD_MONGO_DB}@cluster0.fgvik.mongodb.net/type`,
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
