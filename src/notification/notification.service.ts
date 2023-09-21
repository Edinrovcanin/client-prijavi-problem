import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendNotification(title: string, message: string, userId: number) {
    // Implementirajte logiku za slanje notifikacija
  }
}
