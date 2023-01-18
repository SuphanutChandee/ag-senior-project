import { Controller, Get, Post, Put, Body, Param, Query, Delete } from '@nestjs/common';
import { OverviewHousesService } from './OH.service';
import { UpdateOverviewHousesDto } from './update-OH.dto';

@Controller()
export class OverviewHousesController {
  constructor(private readonly overviewHousesService:OverviewHousesService){}
  
  @Get('OverviewHousesList')
  async OverviewHousesList(): Promise<any> {
    return await this.overviewHousesService.findAll();
  }

  @Put('updateOverviewHouses')
  async updateOverviewHouses(@Query("unit") unit, @Body() put: UpdateOverviewHousesDto ) {
    //console.log(put)
    return this.overviewHousesService.update(unit, put)
  }
}