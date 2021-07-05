import React from 'react';
import { IntlProvider as IntlProviderRI } from 'react-intl';
import { useSelector } from 'react-redux';
import { getMessagesByLocale } from './L10nHelper';
import { selectLocale } from './L10nSlice';
export default function IntlProvider({ children }) {
    const locale = useSelector(selectLocale);
    const messages = getMessagesByLocale(locale);
    return (React.createElement(IntlProviderRI, { locale: locale, messages: messages }, children));
}
//# sourceMappingURL=IntlProvider.js.map