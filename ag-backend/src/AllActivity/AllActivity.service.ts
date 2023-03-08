import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AllActivity, AllActivityDocument } from './AllActivity.schema';
import { CreateAllActivityDto } from './create-AllActivity.dto';
import { UpdateAllActivityDto } from './update-AllActivity.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AllActivitysService {
  constructor(@InjectModel("AllActivity") private AllActivityModel: Model<AllActivityDocument>) {}

  async update(gnum: string, UpdateAllActivityDto: UpdateAllActivityDto) {
    const put = await this.AllActivityModel
      .findOneAndUpdate({gnum: gnum}, {$push: UpdateAllActivityDto}, { new: true });
      if (!put) {
        throw new NotFoundException();
      }
      return put;
  }

  async findAll(): Promise<AllActivity[]> {
    return this.AllActivityModel.find().exec();
  }
}
