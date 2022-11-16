import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GoatInHousesList, GoatInHousesListDocument } from './GIHL.schema';
//import { CreateGoatInHousesListDto } from './dto/create-GoatInHousesList.dto';

@Injectable()
export class GoatInHousesListService {
  constructor(@InjectModel("GoatInHousesList") private GoatInHousesListModel: Model<GoatInHousesListDocument>) {}
/*
  async create(createGoatInHousesListDto: CreateGoatInHousesListDto): Promise<GoatInHousesList> {
    const createdGoatInHousesList = new this.catModel(createGoatInHousesListDto);
    return createdGoatInHousesList.save();
  }*/

  async findAll(): Promise<GoatInHousesList[]> {
    return this.GoatInHousesListModel.find().exec();
  }
}
