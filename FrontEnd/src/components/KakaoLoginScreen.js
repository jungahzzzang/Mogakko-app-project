import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, Alert, SafeAreaView } from 'react-native';
import {Webview} from 'react-native-webview';
import {KAKAO_AUTH_URL} from '../utils/OAuth';


const KakaoLoginScreen = ({navigation, route}) => {
//function KakaoLoginScreen({navigation, route}) {

    const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
    const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;
    //var request_code; 

     const getCode = () => {
        /*
            access code는 url에 붙어 장황하게 날아온다.
            url에서 code= 뒤를 substring하면 된다.
        */
         const exp = "code=";
         var condition = data.indexOf(exp);
         if(condition != -1){
             const request_code = target.substring(condition+exp.length);
             console.log("access code :: "+request_code);
             //토큰값 받기
             requestToken(request_code);
         }
     };

    //  const requestToken = async (request_code) => {
    //     var returnValue = "none";
    //     var request_token_url = "https://kauth.kakao.com/oauth/token";
    //     axios({
    //         method: "post",
    //         url: request_token_url,
    //         params: {
    //             grant_type: 'authorization_code',
    //             client_id: kakaoClientId,
    //             redirect_uri: kakaoRedirectURL,
    //             code: request_code,
    //         },
    //     }).then(function(response){
    //         returnValue = response.data.access_token;
    //     }).catch(function(error){
    //         console.log('error',error);
    //     });
    //  };

    return (
         <View style={{flex:1}}>
            <Webview
                style={{marginTop: 30}}
                source={{
                    uri: KAKAO_AUTH_URL,
                }}
                injectedJavaScript={INJECTED_JAVASCRIPT}
                javaScriptEnabled
                onMessage={ (event) => {
                    //console.log(event.nativeEvent["url"]);
                    //LoginProgress(event.nativeEvent["url"]);
                    const data = event.nativeEvent.url;
                    getCode(data);
                }}
            />
        </View>
    );
}

export default KakaoLoginScreen;
