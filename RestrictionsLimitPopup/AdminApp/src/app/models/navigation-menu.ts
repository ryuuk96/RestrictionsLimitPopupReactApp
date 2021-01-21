export class NavigationMenu {
    constructor(text?: string, url?: string, className?: string, icon?: string, posEnd?: boolean) {
        if (text)
            this.text = text;
        if (url) {
            this.url = url;
        }
        if (className) {
            this.class = className;
        }
        if (icon) {
            this.icon = icon;
        }
        if (posEnd) {
            this.posEnd = posEnd;
        }
    }
    text: string = "";
    icon: string = "";
    url: string = "";
    posEnd: boolean = false;
    class: string = "";
    subMenu: NavigationMenu = <NavigationMenu>{};
}
