import { TokenType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification, NotificationType } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor() { }

  public notificationStore = new BehaviorSubject<Notification>(null);

  setInfo(infoText: string, buttonText?: string, buttonUrl?: string, buttonCustomClass?: string) {
    this.notificationStore.next(new Notification(NotificationType.Info, infoText, buttonText, buttonUrl, buttonCustomClass));
  }
  setWarning(warningText: string, buttonText?: string, buttonUrl?: string, buttonCustomClass?: string) {
    this.notificationStore.next(new Notification(NotificationType.Warning, warningText, buttonText, buttonUrl, buttonCustomClass));
  }
  setDanger(dangerText: string, buttonText?: string, buttonUrl?: string, buttonCustomClass?: string) {
    this.notificationStore.next(new Notification(NotificationType.Danger, dangerText, buttonText, buttonUrl, buttonCustomClass));
  }

}
