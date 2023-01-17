
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateEventListDto {
    @IsNumber()
    @IsNotEmpty()
    eventNum: Number;
    
    @IsString()
    @IsNotEmpty()
    date: string;
  
    @IsString()
    @IsNotEmpty()
    type: string;
  
    @IsString()
    @IsNotEmpty()
    details: string;
  
    @IsString()
    @IsNotEmpty()
    goats : {
      value: string;
    }[]
  }