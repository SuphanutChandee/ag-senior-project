import { IsInt, IsString, IsNumber } from 'class-validator';

export class CreateLineAleartDto {
    @IsNumber()
    readonly LineAleartLV: Number;
  }