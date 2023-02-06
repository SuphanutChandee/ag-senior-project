import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OverviewHouses, OverviewHousesDocument } from './OH.schema';
import { UpdateOverviewHousesDto } from './update-OH.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class OverviewHousesService {
  constructor(@InjectModel("OverviewHouses") private OverviewHousesModel: Model<OverviewHousesDocument>) {}

  async findAll(): Promise<OverviewHouses[]> {
    return this.OverviewHousesModel.find().exec();
  }

  async findOne(unit: number) {
    const fOne = await this.OverviewHousesModel.findOne({unit: unit});
    if (!fOne) {
      throw new NotFoundException();
    }
    return fOne;
  }

  async update(unit: number, updateOverviewHousesDto: UpdateOverviewHousesDto) {
    const put = await this.OverviewHousesModel
      .findOneAndUpdate({ unit: unit}, updateOverviewHousesDto, { new: true });
    if (!put) {
      throw new NotFoundException();
    }
    return put;
  }
}
