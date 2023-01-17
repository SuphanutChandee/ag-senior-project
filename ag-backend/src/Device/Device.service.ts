import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Device, DeviceDocument } from './Device.schema';
import { CreateDeviceListDto } from './create-Device.dto';
import { UpdateDeviceListDto } from './update-Device.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class DevicesService {
  constructor(@InjectModel("Device") private DeviceModel: Model<DeviceDocument>) {}
 
  async create(createDeviceListDto: CreateDeviceListDto): Promise<Device> {
    const createDeviceList = new this.DeviceModel(createDeviceListDto);
    return createDeviceList.save();
  }

  async update(device: string, updateDeviceListDto: UpdateDeviceListDto) {
    const put = await this.DeviceModel
      .findOneAndReplace({ device: device}, updateDeviceListDto, { new: true })
      .populate('device')
      .populate('lastActivity')
      .populate('sumActivity')
      .populate('zeroActivity');
    if (!put) {
      throw new NotFoundException();
    }
    return put;
  }

  async del(device: string) {
    const del = await this.DeviceModel
      .findOneAndDelete({ device: device})
    if (!del) {
      throw new NotFoundException();
    }
    return del;
  }

  async findAll(): Promise<Device[]> {
    return this.DeviceModel.find().exec();
  }
}
