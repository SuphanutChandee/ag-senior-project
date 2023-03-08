import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AllActivityDocument = HydratedDocument<AllActivity>;

interface DateNActivity {
  txt?: string
}

@Schema()
export class AllActivity {
  @Prop()
  gnum: string;
/*
  @Prop({ require: true, type: Object })
    activitys: DateNActivity;*/

  @Prop()
  activitys: [];
}

export const AllActivitySchema = SchemaFactory.createForClass(AllActivity);