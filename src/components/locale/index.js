import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RNLocalize from 'react-native-localize';
import PropTypes from "prop-types";

import us from "./us.json";
import pt from "./pt.json";
import es from "./es.json";
import fr from "./fr.json";

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const locales = RNLocalize.getLocales();
  const languageCode = locales.length > 0 ? locales[0].languageCode : '';
  const deviceLanguage = languageCode.toUpperCase();
  AsyncStorage.setItem("iso", deviceLanguage);
  const [locale, setLocale] = useState(us);

  useEffect(() => {
    let language = us;
    const unsubscribe = AsyncStorage.getItem("iso").then((value) => {
      if (value === "PT") {
        language = pt;
      } else if (value === "ES") {
        language = es;
      } else if (value === "FR") {
        language = fr;
      } else {
        language = us;
      }
      setLocale(language);
    });

    return () => unsubscribe;
  }, []);

  const changeLocale = (iso) => {
    let language = us;
    if (iso === "PT") {
      language = pt;
    } else if (iso === "ES") {
      language = es;
    } else if (iso === "FR") {
      language = fr;
    } else {
      language = us;
    }
    setLocale(language);
  };

  const value = {
    locale,
    changeLocale,
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { us, pt, es, fr };
