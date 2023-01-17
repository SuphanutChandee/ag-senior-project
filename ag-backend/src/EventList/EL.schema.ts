import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventListDocument = HydratedDocument<EventList>;

@Schema()
export class EventList {
  @Prop()
  eventNum: number;
  
  @Prop()
  date: string;

  @Prop()
  type: string;

  @Prop()
  details: string;

  @Prop()
  goats : {
    value: string;
  }[]
}

export const EventListSchema = SchemaFactory.createForClass(EventList);