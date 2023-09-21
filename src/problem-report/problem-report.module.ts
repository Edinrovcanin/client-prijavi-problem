import { Module } from '@nestjs/common';
import { ProblemReportController } from './problem-report.controller';
import { ProblemReportService } from './problem-report.service';
import { NotificationService } from './notification/notification.service'; // Pravilna putanja do NotificationService

@Module({
  controllers: [ProblemReportController],
  providers: [ProblemReportService, NotificationService], // Dodali smo NotificationService u providers
})
export class ProblemReportModule { }
