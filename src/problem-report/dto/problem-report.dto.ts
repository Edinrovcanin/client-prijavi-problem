import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class ProblemReportDto {
  @IsNotEmpty()
  @IsString()
  naslov: string;

  @IsNotEmpty()
  @IsString()
  opis: string;

  @IsNotEmpty()
  @IsInt()
  korisnikId: number;

  @IsNotEmpty()
  @IsString()
  tipProblema: string;
}
