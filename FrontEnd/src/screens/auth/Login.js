import React from "react";
import styled from "styled-components";
import {WebView} from 'react-native-webview';
import { Image, View, TouchableOpacity } from "react-native";
import {KakaoButton, NaverButton} from '../../utils/Images';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.background};
`;


const Login = ({navigation}) => {
    return(
        <Container>
            <View >
                <View>
                    <View>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('KakaoLoginScreen')}>
                    <Image source={KakaoButton} />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('NaverLoginScreen')}>
            <Image source={NaverButton} style={{width: 300, height: 45,  borderRadius:7, marginTop: 10}}/>
            </TouchableOpacity>
            </View>
        </Container>
    );
};

export default Login;