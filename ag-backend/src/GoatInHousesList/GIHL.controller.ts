import { Controller, Get } from '@nestjs/common';
import { GoatInHousesListService } from './GIHL.service';

@Controller()
export class GoatInHousesListController {
  constructor(private readonly goatInHousesListService:GoatInHousesListService){}
  
  @Get('GoatInHousesList')
  async GoatInHousesList(): Promise<any> {
    return await this.goatInHousesListService.findAll();
  }
}