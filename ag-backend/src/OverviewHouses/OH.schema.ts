import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OverviewHousesDocument = HydratedDocument<OverviewHouses>;

@Schema()
export class OverviewHouses {
  @Prop()
  unit: Number;

  @Prop()
  total: Number;

  @Prop()
  color: string;

  @Prop()
  ablv0: Number;

  @Prop()
  ablv1: Number;

  @Prop()
  ablv2: Number;

  @Prop()
  ablv3: Number;
}

export const OverviewHousesSchema = SchemaFactory.createForClass(OverviewHouses);