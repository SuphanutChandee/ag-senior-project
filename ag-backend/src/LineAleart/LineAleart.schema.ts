import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LineAleartDocument = HydratedDocument<LineAleart>;

@Schema()
export class LineAleart {
  @Prop()
  LineAleartLV: Number;
}

export const LineAleartSchema = SchemaFactory.createForClass(LineAleart);