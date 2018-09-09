import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import localeDataEn from 'client/assets/i18n/en.json';
import localeDataRu from 'client/assets/i18n/ru.json';

addLocaleData([...en, ...ru]);

const messages = {
  en: localeDataEn,
  ru: localeDataRu,
};

function mapStateToProps(state) {
  const { switchLang: { lang } = {} } = state;
  return { locale: lang, messages: messages[lang] };
}

export default connect(mapStateToProps)(IntlProvider);
