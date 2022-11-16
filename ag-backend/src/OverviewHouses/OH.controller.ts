import { Controller, Get } from '@nestjs/common';
import { OverviewHousesService } from './OH.service';

@Controller()
export class OverviewHousesController {
  constructor(private readonly overviewHousesService:OverviewHousesService){}
  
  @Get('OverviewHousesList')
  async OverviewHousesList(): Promise<any> {
    return await this.overviewHousesService.findAll();
  }
}