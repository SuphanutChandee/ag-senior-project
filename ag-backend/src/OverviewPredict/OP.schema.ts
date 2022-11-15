import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OverviewPredictDocument = HydratedDocument<OverviewPredict>;

@Schema()
export class OverviewPredict {
  @Prop()
  date: string;

  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  details: string;

  @Prop()
  chance: string;

  @Prop()
  color: string;
}

export const OverviewPredictSchema = SchemaFactory.createForClass(OverviewPredict);