import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OverviewHeader, OverviewHeaderDocument } from './OH.schema';
//import { CreateOverviewHeaderDto } from './dto/create-OverviewHeader.dto';

@Injectable()
export class OverviewHeaderService {
  constructor(@InjectModel("OverviewHeader") private OverviewHeaderModel: Model<OverviewHeaderDocument>) {}
/*
  async create(createOverviewHeaderDto: CreateOverviewHeaderDto): Promise<OverviewHeader> {
    const createdOverviewHeader = new this.catModel(createOverviewHeaderDto);
    return createdOverviewHeader.save();
  }*/

  async findAll(): Promise<OverviewHeader[]> {
    return this.OverviewHeaderModel.find().exec();
  }
}
