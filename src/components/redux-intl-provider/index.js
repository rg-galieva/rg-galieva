import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import localeDataEn from '../../assets/i18n/en.json';
import localeDataRu from '../../assets/i18n/ru.json';

addLocaleData([...en, ...ru]);

const messages = {
    en: localeDataEn,
    ru: localeDataRu,
};

function mapStateToProps(state) {
    const lang  = state.switchLang.lang;
    return { locale: lang, messages: messages[lang] };
}

export default connect(mapStateToProps)(IntlProvider);