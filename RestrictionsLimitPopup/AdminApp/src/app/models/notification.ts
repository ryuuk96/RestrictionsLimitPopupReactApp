export class Notification {
    constructor(type: string, text: string, buttonText?: string, buttonUrl?: string, customButtonClass?: string) {
        this.text = text; this.type = type;
        this.buttonText = buttonText ? buttonText : undefined;
        this.buttonUrl = buttonUrl ? buttonUrl : undefined;
        this.customButtonClass = customButtonClass ? customButtonClass : undefined;
    }

    type: string = "";
    text: string = "";
    buttonText: string | undefined = undefined;
    buttonUrl: string | undefined = undefined;
    customButtonClass: string | undefined = undefined;
}

export enum NotificationType {
    Warning = "Warning",
    Info = "Info",
    Danger = "Danger"
};
