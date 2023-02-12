import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GoatInHousesListDocument = HydratedDocument<GoatInHousesList>;

@Schema()
export class GoatInHousesList {
  @Prop()
  unit : number;
  
  @Prop()
  goat : {
    gnum: string;
    gender: string;
    status: string;
    age: Number;
    behavior: string;
    color: string;
  }[]
}

export const GoatInHousesListSchema = SchemaFactory.createForClass(GoatInHousesList);