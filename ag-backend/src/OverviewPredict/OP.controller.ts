import { Controller, Get } from '@nestjs/common';
import { OverviewPredictsService } from '../services/OverviewPredicts';

@Controller()
export class OverviewPredictsController {
  constructor(private readonly overViewPredictService:OverviewPredictsService){}
  
  @Get('OverviewPredictList2')
  async OverviewPredictList(): Promise<any> {
    return await this.overViewPredictService.findAll();
  }
}