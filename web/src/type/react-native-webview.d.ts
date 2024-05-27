interface Window {
  ReactNativeWebView?: {
    postMessage: (message: string) => void;
  };
  kakao: any;
  platform: 'android' | 'ios';
}

interface DocumentEventMap {
  message: MessageEvent;
}
