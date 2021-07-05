import { createIntl, createIntlCache } from 'react-intl';
import { getLocale, getMessagesByLocale } from './L10nHelper';
function L10n() {
    let intl;
    function loadMessages(locale) {
        const cache = createIntlCache();
        intl = createIntl({
            locale,
            defaultLocale: 'pt',
            messages: getMessagesByLocale(locale),
        }, cache);
    }
    loadMessages(getLocale());
    return {
        formatMessage(option) {
            return intl.formatMessage(option);
        },
        loadMessages,
    };
}
export default L10n();
//# sourceMappingURL=L10n.js.map