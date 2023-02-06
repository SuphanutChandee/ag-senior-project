import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LineAleart, LineAleartDocument } from './LineAleart.schema';
import { CreateLineAleartDto } from './create-LineAleart.dto';
import { UpdateLineAleartDto } from './update-LineAleart.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class LineAleartsService {
  constructor(@InjectModel("LineAleart") private LineAleartModel: Model<LineAleartDocument>) {}
 
  async create(createLineAleartDto: CreateLineAleartDto): Promise<LineAleart> {
    const createLineAleartList = new this.LineAleartModel(createLineAleartDto);
    return createLineAleartList.save();
  }

  async update(updateOverviewHeaderDto: UpdateLineAleartDto) {
    const put = await this.LineAleartModel
      .updateOne(updateOverviewHeaderDto);
    if (!put) {
      throw new NotFoundException();
    }
    return put;
  }

  async findAll(): Promise<LineAleart[]> {
    return this.LineAleartModel.find().exec();
  }
}
