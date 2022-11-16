import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OverviewHeaderDocument = HydratedDocument<OverviewHeader>;

@Schema()
export class OverviewHeader {
  @Prop()
  total: number;

  @Prop()
  abnormaly: string;

  @Prop()
  total_ab: Number;

  @Prop()
  ablv0: Number;

  @Prop()
  ablv1: Number;

  @Prop()
  ablv2: Number;

  @Prop()
  ablv3: Number;
}

export const OverviewHeaderSchema = SchemaFactory.createForClass(OverviewHeader);