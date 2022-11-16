import { Controller, Get } from '@nestjs/common';
import { OverviewHeaderService } from './OH.service';

@Controller()
export class OverviewHeaderController {
  constructor(private readonly overviewHeaderService:OverviewHeaderService){}
  
  @Get('OverviewHeaderList')
  async OverviewHeaderList(): Promise<any> {
    return await this.overviewHeaderService.findAll();
  }
}