import { Controller, Get } from '@nestjs/common';
import { DevicesService } from './Device.service';

@Controller()
export class DevicesController {
  constructor(private readonly overViewPredictService:DevicesService){}
  
  @Get('DeviceList')
  async DeviceList(): Promise<any> {
    return await this.overViewPredictService.findAll();
  }
}