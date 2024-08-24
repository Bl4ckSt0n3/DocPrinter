import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private notification: NzNotificationService) { }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(
      type,
      title,
      message,
      {
        nzStyle: {
          width: '400px',
          marginLeft: '-265px'
        },
        nzClass: 'test-class'
      }
    );
  };

  confirmPassword(password: any, confirmPass: any): boolean {
    return password === confirmPass;
  }
}
