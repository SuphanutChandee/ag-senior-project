import { Controller, Get, Query, Body, Put } from '@nestjs/common';
import { GoatInHousesListService } from './GIHL.service';
import { UpdateGoatInHousesList } from './update-GIHL.dto';
@Controller()
export class GoatInHousesListController {
  constructor(private readonly goatInHousesListService:GoatInHousesListService){}
  
  @Get('GoatInHousesList')
  async GoatInHousesList(): Promise<any> {
    return await this.goatInHousesListService.findAll();
  }

  @Get('findOneGoatInHousesList')
  async findOneGoatInHousesList(@Query("gnum") gnum): Promise<any> {
    return await this.goatInHousesListService.findOne(gnum);
  }

  @Put('updateGoatInHousesList')
  async FindOneGoatDetails(@Query("gnum") gnum, @Body() put: UpdateGoatInHousesList) {
    return await this.goatInHousesListService.update(gnum, put);
  }
}