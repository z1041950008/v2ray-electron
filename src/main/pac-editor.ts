import { BrowserWindow } from "electron";
declare const __static: string;

class PacEditor {
  private win: null | BrowserWindow;
  public constructor() {
    this.win = null;
  }

  public launch(): void {
    if (!this.win) {
      this.win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Pac Editor",
        webPreferences: { nodeIntegration: true }
      });
      this.win.on(
        "closed",
        (): void => {
          this.win = null;
        }
      );

      this.win.setMenu(null);
      this.win.loadURL(`file://${__static}/pages/pac-editor/index.html`);
    } else {
      this.win.focus();
    }
  }
}

export { PacEditor };