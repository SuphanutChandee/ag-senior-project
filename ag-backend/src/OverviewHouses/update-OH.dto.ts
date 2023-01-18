
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateOverviewHousesDto {
  @IsNumber()
  @IsNotEmpty()
  unit: Number;

  @IsNumber()
  @IsNotEmpty()
  total: number;
  
  @IsString()
  @IsNotEmpty()
  color: string;

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