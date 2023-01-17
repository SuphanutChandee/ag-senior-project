import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Device, DeviceDocument } from './Device.schema';
//import { CreateDeviceDto } from './dto/create-Device.dto';

@Injectable()
export class DevicesService {
  constructor(@InjectModel("Device") private DeviceModel: Model<DeviceDocument>) {}
/*
  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const createdDevice = new this.catModel(createDeviceDto);
    return createdDevice.save();
  }*/

  async findAll(): Promise<Device[]> {
    return this.DeviceModel.find().exec();
  }
}
