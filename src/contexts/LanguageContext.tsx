import { createContext, useContext, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext<any>(null);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState<"en" | "fr" | "mg">("fr");
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "en" | "fr" | "mg") => {
    setPosition(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ position, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
