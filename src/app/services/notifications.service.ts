import { Injectable } from "@angular/core";
declare let alertify: any;

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  constructor() {
    alertify.set("notifier", "position", "top-right");
  }
  confirm(message: string, okCallBack: () => any) {
    alertify.confirm(message, () => {
      okCallBack();
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
  message(message: string) {
    alertify.message(message);
  }
}
