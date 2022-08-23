import React from "react";
import ScreenContainer from "../../components/ScreenContainer";
import {Webview} from "react-native-webview";

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const NaverLoginScreen = () => {
    return (
        <ScreenContainer style={{flex: 1}}>
            <Webview
                originWhitelist={['*']}
                scalesPageToFit={true}
                source={{uri: 'http://localhost8080//oauth2/authorization/naver'}}   
                javaScriptEnabled={true}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                onMessage={
                    async(event) => {
                        navigation.navigate('Main')
                    }}
            />          
        </ScreenContainer>
    )
}

export default NaverLoginScreen;