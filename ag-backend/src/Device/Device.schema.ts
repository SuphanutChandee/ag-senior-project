import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeviceDocument = HydratedDocument<Device>;

@Schema()
export class Device {
  @Prop()
  device: string;

  @Prop()
  lastActivity: Number;

  @Prop()
  sumActivity: Number;

  @Prop()
  zeroActivity: Number;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);