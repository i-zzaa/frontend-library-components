const LOCAL_STORAGE_KEY = 'userLocale';
function get() {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
}
function set(locale) {
    localStorage.setItem(LOCAL_STORAGE_KEY, locale);
}
export default { get, set };
//# sourceMappingURL=LocaleRepository.js.map