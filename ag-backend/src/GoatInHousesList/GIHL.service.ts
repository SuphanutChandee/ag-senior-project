import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GoatInHousesList, GoatInHousesListDocument } from './GIHL.schema';
//import { CreateGoatInHousesListDto } from './dto/create-GoatInHousesList.dto';
import { UpdateGoatInHousesList } from './update-GIHL.dto';
import { NotFoundException } from '@nestjs/common';

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

  async findOne(gnum: string) {
    return this.GoatInHousesListModel.findOne({"goat.gnum" : gnum });
  }

  async update(gnum: string, updateGoatInHousesList: UpdateGoatInHousesList) {
    const put = await this.GoatInHousesListModel
      .findOneAndUpdate({"goat.gnum" : gnum }, updateGoatInHousesList, { new: true });
    if (!put) {
      throw new NotFoundException();
    }
    return put;
  }
}
