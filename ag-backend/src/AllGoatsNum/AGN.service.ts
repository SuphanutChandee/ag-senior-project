import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AllGoatsNum, AllGoatsNumDocument } from './AGN.schema';
import { UpdateAllGoatsNumDto } from './update-AGN.dto';
import { CreateAllGoatsNumDto } from './create-AGN.dto';

@Injectable()
export class AllGoatsNumService {
  constructor(@InjectModel("AllGoatsNum") private AllGoatsNumModel: Model<AllGoatsNumDocument>) {}
/*
  async create(createAllGoatsNumDto: CreateAllGoatsNumDto): Promise<AllGoatsNum> {
    const createdAllGoatsNum = new this.catModel(createAllGoatsNumDto);
    return createdAllGoatsNum.save();
  }*/

  async findAll(): Promise<AllGoatsNum[]> {
    return this.AllGoatsNumModel.find().exec();
  }

  async add(createAllGoatsNumDto: CreateAllGoatsNumDto) {
    const creatrGoatNum = new this.AllGoatsNumModel(createAllGoatsNumDto);
    return creatrGoatNum.save();
  }
}
