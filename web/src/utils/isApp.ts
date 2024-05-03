const isApp = () => {
  let isApp = false;

  if (window?.ReactNativeWebView !== undefined) {
    isApp = true;
  }

  return isApp;
};

export default isApp;
