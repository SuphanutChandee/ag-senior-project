import { Controller, Get, Put, Body, Query } from '@nestjs/common';
import { GoatsDetailsService } from './GD.service';
import { UpdateGoatsDetailstDto } from './update-GD.dto';

@Controller()
export class GoatsDetailsController {
  constructor(private readonly goatsDetailsService:GoatsDetailsService){}
  
  @Get('GoatsDetails')
  async GoatsDetails(): Promise<any> {
    return await this.goatsDetailsService.findAll();
  }

  @Get('FindOneGoatDetails')
  async FindOneGoatDetails(@Query("gnum") gnum) {
    return await this.goatsDetailsService.findOne(gnum);
  }

  @Put('updateGoatsDetails')
  async updateGoatDetails(@Query("gnum") gnum, @Body() put: UpdateGoatsDetailstDto ) {
    //console.log(put)
    return this.goatsDetailsService.update(gnum, put)
  }

  @Put('updatePredictGoatsDetails')
  async updatePredictGoatDetails(@Query("gnum") gnum, @Body() put: UpdateGoatsDetailstDto ) {
    //console.log(put)
    return this.goatsDetailsService.updatePredict(gnum, put)
  }
}