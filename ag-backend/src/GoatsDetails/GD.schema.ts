import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GoatsDetailsDocument = HydratedDocument<GoatsDetails>;

@Schema()
export class GoatsDetails {
  @Prop()
  gnum: string;

  @Prop()
  status: string;

  @Prop()
  unit: Number;

  @Prop()
  gender: string;

  @Prop()
  gene: string;

  @Prop()
  birthDate: string;

  @Prop()
  bornWeight: string;
  
  @Prop()
  Fnum: string;
  
  @Prop()
  Fgene: string;
  
  @Prop()
  Mnum: string;
  
  @Prop()
  Mgene: string;
  
  @Prop()
  DD: string;
  
  @Prop()
  age: number;
  
  @Prop()
  behavior: string;
  
  @Prop()
  color: string;
  
  @Prop()
  predicts: {
    date: string;
    name: string;
    type: string;
    details: string;
    chance: string;
    color: string;
  }[];

  @Prop()
  Activity: [];
}

export const GoatsDetailsSchema = SchemaFactory.createForClass(GoatsDetails);