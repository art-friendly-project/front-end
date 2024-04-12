const isApp = () => {
  let isApp = false;

  if (window?.ReactNativeWebView !== null) {
    isApp = true;
  }

  return isApp;
};

export default isApp;
