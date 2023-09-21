import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ProblemReportService } from './problem-report.service';
import { ProblemReportDto } from './dto/problem-report.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('problem-report')
export class ProblemReportController {
  constructor(private readonly problemReportService: ProblemReportService) { }

  @Post()
  @UseGuards(AuthGuard()) // Primer korišćenja auth guarda
  async submitProblemReport(@Body() reportDto: ProblemReportDto) {
    return this.problemReportService.submitProblemReport(reportDto);
  }
}
