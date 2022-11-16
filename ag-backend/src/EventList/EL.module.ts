import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventListService } from './EL.service';
import { EventList, EventListSchema } from './EL.schema';
import { AppController } from '../app.controller';
import { EventListController } from './EL.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: "EventList", schema: EventListSchema }])],
  //controllers: [AppController],
  controllers: [EventListController],
  providers: [EventListService],
  exports: [EventListService],
})
export class EventListModule {}