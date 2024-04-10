import React from 'react';
import {SafeAreaView} from 'react-native';
import WebViewcontainer from './src/components/webView/WebViewContainer';

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <WebViewcontainer />
    </SafeAreaView>
  );
};

export default App;
