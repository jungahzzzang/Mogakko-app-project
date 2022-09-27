import React, {useEffect, useState, useRef} from 'react';
import { Alert, BackHandler } from 'react-native';
import {WebView} from 'react-native-webview';
import ScreenContainer from '../../components/ScreenContainer';
import {KAKAO_AUTH_URL, kakaoClientId, kakaoRedirectURL} from '../../utils/OAuth';
import axios from 'axios';
//import * as SecureStore from 'expo-secure-store';

// const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoLoginScreen = ({navigation}) => {

    WebView = {
        canGoBack: false,
        ref: null
    }

    useEffect(() => {
        const backAction = () => {
            if(this.WebView.canGoBack && this.WebView.ref){
                this.WebView.ref.goBack();
                return true;
            }else{
                Alert.alert('메인 페이지로 돌아갈까요?', [
                    { text: '아니요', onPress: () => null,},
                    { text: '네', onPress: () => navigation.navigate('Main') }
                ]);

                return true;
            }};

            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

            return () => backHandler.remove([navState.canGoBack])
    }, [])

    function LogInProgress(data){
        
        //access code는 url에 붙어 장황하게 날아온다.
        //substring으로 url에서 code= 뒤를 substring하면 된다.

        const exp = "code=";
        var condition = data.indexOf(exp);
        if(condition != 1){

            var request_code = data.substring(condition + exp.length);

            console.log("*****access code***** = "+ request_code);

            //토큰값 받기
            requsetToken(request_code);
        }
    };

    const requsetToken = async (request_code) => {

        var returnValue = "none";

        var request_token_url = "https://kauth.kakao.com/oauth/token";

        axios({

            method: "post",

            url: request_token_url,

            withCredentials: true,

            params: {

                grant_type: 'authoriation_code',

                client_id: {kakaoClientId},

                redirect_uri: {kakaoRedirectURL},

                code: request_code,
            },
        }).then(function (response) {
            returnValue = response.data.access_token;
            console.log('token', returnValue)
            requestplayer(returnValue)

        }).catch(function (error) {
            
            console.log('error', error);
        });
    };

    const requestplayer = async (returnValue) => {

        var token = returnValue;

        var request_player_url = "";

        axios({

            method: "GET",

            url: request_player_url,

            headers: {
                Authorization: 'Bearer '+ token
            },

        }).then(function (response) {

            returnValue = response.data;
            let nickname = response.data.kakao_account.prifile.nickname;

            console.log(returnValue)

            const userSettings = {

            };

            navigation.navigate('loginSuccess',)
        
        }).catch(function (error){

            console.log('error', error);

        });
    };

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
                    LogInProgress(event.nativeEvent["url"]);
                    //onMessage... : webView에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
                }}
            />
        </ScreenContainer>
    );
}

export default KakaoLoginScreen;
