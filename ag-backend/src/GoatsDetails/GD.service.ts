import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GoatsDetails, GoatsDetailsDocument } from './GD.schema';
import { UpdateGoatsDetailstDto } from './update-GD.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class GoatsDetailsService {
  constructor(@InjectModel("GoatsDetails") private GoatsDetailsModel: Model<GoatsDetailsDocument>) {}

  async findAll(): Promise<GoatsDetails[]> {
    return this.GoatsDetailsModel.find().exec();
  }

  async findOne(gnum: string) {
    const fOne = await this.GoatsDetailsModel.findOne({gnum: gnum});
    if (!fOne) {
      throw new NotFoundException();
    }
    return fOne;
  }

  async update(gnum: string, updateGoatsDetailstDto: UpdateGoatsDetailstDto) {
    const put = await this.GoatsDetailsModel
      .findOneAndUpdate({ gnum: gnum}, updateGoatsDetailstDto, { new: true });
    if (!put) {
      throw new NotFoundException();
    }
    return put;
  }

  async updatePredict(gnum: string, updateGoatsDetailstDto: UpdateGoatsDetailstDto) {
    const put = await this.GoatsDetailsModel
      .findOneAndReplace({ gnum: gnum}, updateGoatsDetailstDto, { new: true });
    if (!put) {
      throw new NotFoundException();
    }
    return put;
  }
}
