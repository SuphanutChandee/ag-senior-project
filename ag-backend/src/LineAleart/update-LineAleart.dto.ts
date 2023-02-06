
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

export class UpdateLineAleartDto {
    @IsNumber()
    @IsNotEmpty()
    LineAleartLV: Number;
  }