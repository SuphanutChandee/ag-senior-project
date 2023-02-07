import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CollectData, CollectDataDocument } from './CollectData.schema';
import { CreateCollectDataDto } from './create-CollectData.dto';
import { UpdateCollectDataDto } from './update-CollectData.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CollectDatasService {
  constructor(@InjectModel("CollectData") private CollectDataModel: Model<CollectDataDocument>) {}

  async update(device: string, UpdateCollectDataDto: UpdateCollectDataDto) {
    const put = await this.CollectDataModel
      .findOneAndUpdate({device: device}, {$push: UpdateCollectDataDto}, { new: true });
      if (!put) {
        throw new NotFoundException();
      }
      return put;
  }

  async findAll(): Promise<CollectData[]> {
    return this.CollectDataModel.find().exec();
  }
}
