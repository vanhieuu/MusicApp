import i18n from "i18n-js"
import en from "./en"
import vi from "./vi"
i18n.locale  = "vi";
i18n.fallbacks = true;
i18n.translations = {vi,en}