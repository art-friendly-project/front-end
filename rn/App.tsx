import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
const App = () => {
  let webviewRef = useRef<WebView>(null);

  return (
    <SafeAreaView className="flex-1">
      <WebView ref={webviewRef} source={{uri: 'http://192.168.0.80:3000'}} />
    </SafeAreaView>
  );
};

export default App;
