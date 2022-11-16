import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GoatsDetails, GoatsDetailsDocument } from './GD.schema';
//import { CreateGoatsDetailsDto } from './dto/create-GoatsDetails.dto';

@Injectable()
export class GoatsDetailsService {
  constructor(@InjectModel("GoatsDetails") private GoatsDetailsModel: Model<GoatsDetailsDocument>) {}
/*
  async create(createGoatsDetailsDto: CreateGoatsDetailsDto): Promise<GoatsDetails> {
    const createdGoatsDetails = new this.catModel(createGoatsDetailsDto);
    return createdGoatsDetails.save();
  }*/

  async findAll(): Promise<GoatsDetails[]> {
    return this.GoatsDetailsModel.find().exec();
  }
}
