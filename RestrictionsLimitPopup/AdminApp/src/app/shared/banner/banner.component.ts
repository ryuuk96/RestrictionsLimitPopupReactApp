import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from 'src/app/models/notification';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {

  constructor(private notificationService: NotificationService,
    private route: Router) { }

  currentNotification: Notification = null;
  notificationTimeout: any = null;
  buttonClass: string = "standardButton";

  ngOnInit(): void {
    this.subscribeToNotification();
  }

  subscribeToNotification() {
    this.notificationService.notificationStore.subscribe(notification => {
      this.currentNotification = notification;
      this.buttonClass = notification.customButtonClass ? notification.customButtonClass : this.buttonClass;
      this.notificationTimeout = setTimeout(() => {
        this.currentNotification = null;
      }, 6000);
    });
  }

  endNotificationTimeout() {
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
      this.notificationTimeout = null;
    }
  }

  routeTo(url: string) {
    this.route.navigate([url]);
  }
  ngOnDestroy(): void {
    this.endNotificationTimeout();
  }
}
