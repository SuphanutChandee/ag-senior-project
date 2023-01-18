import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OverviewHeader, OverviewHeaderDocument } from './OH.schema';
import { UpdateOverviewHeaderDto } from './update-OH.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class OverviewHeaderService {
  constructor(@InjectModel("OverviewHeader") private OverviewHeaderModel: Model<OverviewHeaderDocument>) {}

  async findAll(): Promise<OverviewHeader[]> {
    return this.OverviewHeaderModel.find().exec();
  }

  async update(updateOverviewHeaderDto: UpdateOverviewHeaderDto) {
    const put = await this.OverviewHeaderModel
      .updateOne(updateOverviewHeaderDto);
    if (!put) {
      throw new NotFoundException();
    }
    return put;
  }
}
