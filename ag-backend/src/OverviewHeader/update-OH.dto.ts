
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateOverviewHeaderDto {
    @IsNumber()
    @IsNotEmpty()
    total: number;
    
    @IsString()
    @IsNotEmpty()
    abnormaly: string;
  
    @IsNumber()
    @IsNotEmpty()
    total_ab: Number;
  
    @IsNumber()
    @IsNotEmpty()
    ablv0: Number;
  
    @IsNumber()
    @IsNotEmpty()
    ablv1: Number;

    @IsNumber()
    @IsNotEmpty()
    ablv2: Number;

    @IsNumber()
    @IsNotEmpty()
    ablv3: Number;
  }