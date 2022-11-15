import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OverviewPredict, OverviewPredictDocument } from '../OverviewPredict/OP.schema';
//import { CreateOverviewPredictDto } from './dto/create-OverviewPredict.dto';

@Injectable()
export class OverviewPredictsService {
  constructor(@InjectModel("OverviewPredict") private OverviewPredictModel: Model<OverviewPredictDocument>) {}
/*
  async create(createOverviewPredictDto: CreateOverviewPredictDto): Promise<OverviewPredict> {
    const createdOverviewPredict = new this.catModel(createOverviewPredictDto);
    return createdOverviewPredict.save();
  }*/

  async findAll(): Promise<OverviewPredict[]> {
    return this.OverviewPredictModel.find().exec();
  }
}
