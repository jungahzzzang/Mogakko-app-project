import React from 'react';
import {WebView} from 'react-native-webview';
import ScreenContainer from '../../components/ScreenContainer';
import {KAKAO_AUTH_URL} from '../../utils/OAuth';
//import * as SecureStore from 'expo-secure-store';

// const INJECTED_JAVASCRIPT = `(function() {
//     window.ReactNativeWebView.postMessage(window.document.body.querySelector('pre').innerHTML);
// })();`;

// const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoLoginScreen = ({navigation}) => {

    return (
         <ScreenContainer style={{flex: 1}}>
            <WebView
                originWhitelist={['*']}
                scalesPageToFit={true}
                source={{
                    uri: KAKAO_AUTH_URL
                }}
                javaScriptEnabled={true}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                onMessage={ (event) => {
                    //console.log(event.nativeEvent["url"]);
                    //LoginProgress(event.nativeEvent["url"]);
                    //navigation.navigate('Main', {screen: 'Home'})
                    navigation.navigate('Main')
                    //const data = event.nativeEvent.data;
                    //const token = JSON.parse(data.replace('\\',""))
                    //wait SecureStore.setItemAsync('token',token);
                    //dispatchEvent({type:'SIGN_IN', token: token});
                }}
            />
        </ScreenContainer>
    );
}

export default KakaoLoginScreen;
