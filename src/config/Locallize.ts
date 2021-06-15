import I18n from 'i18n-js'
import  { createContext, useContext } from 'react'
import { StyleSheet} from 'react-native'
import  { TScope } from '../trans/vi'

export type TLocale = "en" | "vi"
export interface ILocalization {
    t: (scope:TScope,options?: I18n.TranslateOptions | undefined) => string;
    locale:TLocale; //ngon ngư hien tai
    setLocale:(locale:TLocale) => void // ham set ngon ngu
}
export const LocalizationContext = createContext<ILocalization>({
    t:(scope:TScope) =>" vi",
    locale:"vi",
    setLocale:(locale = "vi") => {},
})

export const useLocale = () =>{
    const {t,locale,setLocale} = 
    useContext<ILocalization>(LocalizationContext);
    return{t,locale,setLocale}
}

const styles = StyleSheet.create({})
