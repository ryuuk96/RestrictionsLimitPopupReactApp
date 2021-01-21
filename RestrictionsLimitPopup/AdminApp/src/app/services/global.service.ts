import { ErrorHandler, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicationClass } from '../models/utility';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements ErrorHandler {
  constructor() { }

  applicationWidth: number = -1;
  classFromWidth = new BehaviorSubject<string>("large");

  setApplicationInnerWidth(width) {
    this.applicationWidth = width;
    if (width > 991)
      this.classFromWidth.next(ApplicationClass.Large);
    else if (width > 768 && width <= 991)
      this.classFromWidth.next(ApplicationClass.Medium);
    else
      this.classFromWidth.next(ApplicationClass.Small);
  }

  handleError(error: any): void {
    console.log(`Angular error occurred ${error}`);
  }

  getEditorApiKey(): string {
    return "rwxk9yg4f3lsl9qsk7uxlmtb8w0x7mm85evin68f31hyn3dk";
  }

  getBaseUrl(): string {
    return document.getElementsByTagName("base")[0].href;
  }

}
