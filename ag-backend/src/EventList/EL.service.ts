import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EventList, EventListDocument } from './EL.schema';
//import { CreateEventListDto } from './dto/create-EventList.dto';

@Injectable()
export class EventListService {
  constructor(@InjectModel("EventList") private EventListModel: Model<EventListDocument>) {}
/*
  async create(createEventListDto: CreateEventListDto): Promise<EventList> {
    const createdEventList = new this.catModel(createEventListDto);
    return createdEventList.save();
  }*/

  async findAll(): Promise<EventList[]> {
    return this.EventListModel.find().exec();
  }
}
