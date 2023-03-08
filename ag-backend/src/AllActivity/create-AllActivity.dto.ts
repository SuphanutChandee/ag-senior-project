import { IsInt, IsString, IsNumber } from 'class-validator';

interface DateNActivity {
  txt?: string
}

export class CreateAllActivityDto {
    @IsString()
    readonly gnum: string;
  
    @IsNumber()
    activitys: DateNActivity;
/*
    @IsNumber()
    activitys: [];*/
  }