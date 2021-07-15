import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TypeMongoDocument = TypeMongoDb & Document;

@Schema()
export class TypeMongoDb {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const TypeMongoDbShema = SchemaFactory.createForClass(TypeMongoDb);
