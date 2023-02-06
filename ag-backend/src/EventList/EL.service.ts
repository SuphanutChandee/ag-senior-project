import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EventList, EventListDocument } from './EL.schema';
import { CreateEventListDto } from './create-EventList.dto';
import { UpdateEventListDto } from './update-EventList.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class EventListService {
  constructor(@InjectModel("EventList") private EventListModel: Model<EventListDocument>) {}

  async create(createEventListDto: CreateEventListDto): Promise<EventList> {
    const createdEventList = new this.EventListModel(createEventListDto);
    return createdEventList.save();
  }

  async update(eventNum: number, updateEventListDto: UpdateEventListDto) {
    const put = await this.EventListModel
      .findOneAndUpdate({ eventNum: eventNum}, updateEventListDto, { new: true })
      /*.populate('eventNum')
      .populate('date')
      .populate('type')
      .populate('details')
      .populate('goats')*/;
    if (!put) {
      throw new NotFoundException();
    }
    return put;
  }

  async del(eventNum: number) {
    const del = await this.EventListModel
      .findOneAndDelete({ eventNum: eventNum})
    if (!del) {
      throw new NotFoundException();
    }
    return del;
  }

  async findAll(): Promise<EventList[]> {
    return this.EventListModel.find().exec();
  }

  async findOne(eventNum: number) {
    const fOne = await this.EventListModel.findOne({eventNum: eventNum});
    if (!fOne) {
      throw new NotFoundException();
    }
    return fOne;
  }
}
