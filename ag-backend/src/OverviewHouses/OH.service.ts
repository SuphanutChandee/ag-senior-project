import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OverviewHouses, OverviewHousesDocument } from './OH.schema';
//import { CreateOverviewHousesDto } from './dto/create-OverviewHouses.dto';

@Injectable()
export class OverviewHousesService {
  constructor(@InjectModel("OverviewHouses") private OverviewHousesModel: Model<OverviewHousesDocument>) {}
/*
  async create(createOverviewHousesDto: CreateOverviewHousesDto): Promise<OverviewHouses> {
    const createdOverviewHouses = new this.catModel(createOverviewHousesDto);
    return createdOverviewHouses.save();
  }*/

  async findAll(): Promise<OverviewHouses[]> {
    return this.OverviewHousesModel.find().exec();
  }
}
