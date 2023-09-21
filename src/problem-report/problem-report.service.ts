import { Injectable } from '@nestjs/common';
import { NotificationService } from './notification/notification.service'; // Pravilna putanja do NotificationService
import { ProblemReportDto } from './dto/problem-report.dto';

@Injectable()
export class ProblemReportService {
  constructor(private readonly notificationService: NotificationService) { }

  async submitProblemReport(reportDto: ProblemReportDto) {
    // Implementirajte logiku za prijavljivanje problema

    // Pošaljite notifikaciju
    const title = 'Novi problem prijavljen';
    const message = `Korisnik je prijavio problem: ${reportDto.opis}`;
    const userId = reportDto.korisnikId;
    await this.notificationService.sendNotification(
      title,
      message,
      userId.toString(),
    );

    // Vratite odgovor o uspešnoj prijavi problema
    return { message: 'Problem je uspešno prijavljen' };
  }
}
