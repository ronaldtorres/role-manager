export default (Vue) => {
  Vue.filter("capitalize", (value) => {
    if (!value) return "";
    value = String(value);
    return value.charAt(0).toUpperCase() + value.slice(1);
  });
};
