import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CollectDataDocument = HydratedDocument<CollectData>;

@Schema()
export class CollectData {
  @Prop()
  device: string;

  @Prop()
  lastActivity: [];

  @Prop()
  sumActivity: [];

  @Prop()
  zeroActivity: [];
}

export const CollectDataSchema = SchemaFactory.createForClass(CollectData);