import { Storage, Device } from "@capacitor/core";
import autoBind from "auto-bind";
import en from "~/assets/locales/en.json";
import ru from "~/assets/locales/ru.json";

class Localization {
  readonly languageList = ["en", "ru"];
  private readonly storageNameLanguage = "interfaceLanguage";
  private readonly defaultLanguage = this.languageList[0];

  lang: string = this.defaultLanguage;

  constructor() {
    autoBind(this);
    this.init().then();
  }

  async init() {
    if (typeof window !== "undefined") {
      const storage = await Storage.get({ key: this.storageNameLanguage });
      this.lang = storage.value || (await Localization.langDetect());
    }
  }

  async setLang(data: string) {
    this.lang = data;
    await Storage.set({ key: this.storageNameLanguage, value: data });
  }

  private static async langDetect() {
    const language = await Device.getLanguageCode();
    return language.value.substr(0, 2).toLowerCase() || "en";
  }

  text() {
    switch (this.lang) {
      case this.languageList[0]:
        return en;
      case this.languageList[1]:
        return ru;

      default:
        return en;
    }
  }
}

export default Localization;
