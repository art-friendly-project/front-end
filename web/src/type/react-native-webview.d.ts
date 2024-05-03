interface Window {
  ReactNativeWebView?: {
    postMessage: (message: string) => void;
  };
  kakao: any;
}

interface DocumentEventMap {
  message: MessageEvent;
}
