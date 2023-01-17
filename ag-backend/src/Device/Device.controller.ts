import { Controller, Get, Post, Put, Body, Param, Query, Delete } from '@nestjs/common';
import { DevicesService } from './Device.service';
import { CreateDeviceListDto } from './create-Device.dto';
import { UpdateDeviceListDto } from './update-Device.dto';

@Controller()
export class DevicesController {
  constructor(private readonly DevicesService:DevicesService){}
  
  @Get('DeviceList')
  async DeviceList(): Promise<any> {
    return await this.DevicesService.findAll();
  }

  @Put('updateDeviceList')
  async updateEventList(@Query("device") device, @Body() put: UpdateDeviceListDto ) {
    //console.log(put)
    return this.DevicesService.update(device, put)
  }
}