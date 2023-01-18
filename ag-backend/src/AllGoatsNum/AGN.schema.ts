import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AllGoatsNumDocument = HydratedDocument<AllGoatsNum>;

@Schema()
export class AllGoatsNum {
  @Prop()
  value: String;
}

export const AllGoatsNumSchema = SchemaFactory.createForClass(AllGoatsNum);