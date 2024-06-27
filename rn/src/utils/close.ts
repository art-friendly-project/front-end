import {Alert, BackHandler} from 'react-native';

function close() {
  Alert.alert('종료하시겠어요?', '확인을 누르면 종료합니다.', [
    {
      text: '취소',
      onPress: () => {},
      style: 'cancel',
    },
    {text: '확인', onPress: () => BackHandler.exitApp()},
  ]);
}

export default close;
