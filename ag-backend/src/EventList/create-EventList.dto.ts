import { IsInt, IsString, IsNumber } from 'class-validator';

export class CreateEventListDto {
    @IsNumber()
    readonly eventNum: Number;
    
    @IsString()
    readonly date: string;
  
    @IsString()
    readonly type: string;
  
    @IsString()
    readonly details: string;
  
    @IsString()
    readonly goats : {
      value: string;
    }[]
  }