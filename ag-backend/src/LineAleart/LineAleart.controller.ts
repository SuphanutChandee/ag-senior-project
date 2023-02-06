import { Controller, Get, Post, Put, Body, Param, Query, Delete } from '@nestjs/common';
import { LineAleartsService } from './LineAleart.service';
import { CreateLineAleartDto } from './create-LineAleart.dto';
import { UpdateLineAleartDto } from './update-LineAleart.dto';

@Controller()
export class LineAleartsController {
  constructor(private readonly LineAleartsService:LineAleartsService){}
  
  @Get('LineAleart')
  async LineAleartList(): Promise<any> {
    return await this.LineAleartsService.findAll();
  }

  @Put('updateLineAleart')
  async updateEventList(@Body() put: UpdateLineAleartDto ) {
    //console.log(put)
    return this.LineAleartsService.update(put)
  }
}