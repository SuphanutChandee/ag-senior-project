
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsNumber } from 'class-validator';

interface DateNActivity {
  txt?: string
}

export class UpdateAllActivityDto {

    @IsString()
    @IsNotEmpty()
    gnum: string;
/*
    @IsString()
    @IsNotEmpty()
    activitys: DateNActivity;*/
    /*
    {
    "activitys" : {"2566-2-19": "150"}
    }
    */
  
    @IsString()
    @IsNotEmpty()
    activitys: [];

  }