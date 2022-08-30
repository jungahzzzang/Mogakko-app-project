import React from "react";
import styled from "styled-components";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { PinkLogo } from "../../utils/Images";
import KakaoLogo from "../../../assets/image/login/kakao.svg";
import NaverLogo from "../../../assets/image/login/naver.svg";
import GithubLogo from "../../../assets/image/login/github.svg";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.background};
`;

const styles = StyleSheet.create({
    socialLoginBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
    },
    socialLoginBtnTxt: {
        //color: colors.blue[1],
        fontSize: 25,
        fontWeight: "700",
    },
    buttonLogo: {
        position: "absolute",
        marginLeft: 20
    }
})


const Login = ({navigation}) => {
    return(
        <Container>
            <View>
                <Image source={PinkLogo} style={{width: 300, height: 45}}/>
            </View>
            <View >
                <TouchableOpacity style={{
                    ...styles.socialLoginBtn,
                    marginTop: 10,
                    height: 30,
                    backgroundColor: '#FEE500'
                }} activeOpacity={0.8} onPress={()=>
                    navigation.navigate('KakaoLoginScreen')}
                >
                    <KakaoLogo />
                    <Text style={{fontFamily: "SpoqaHanSansNeo"}}>카카오톡으로 시작하기</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{
                        ...styles.socialLoginBtn,
                        marginTop: 10,
                        height: 30,
                        backgroundColor: '#03c75a'
                    }} activeOpacity={0.8} onPress={()=>
                        navigation.navigate('NaverLoginScreen')}
                    >
                        <NaverLogo />
                    
                    <Text style={{fontFamily: "SpoqaHanSansNeo"}}>네이버로 시작하기</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{
                        ...styles.socialLoginBtn,
                        marginTop: 10,
                        height: 30,
                        backgroundColor: '#FFFFFF'
                    }} activeOpacity={0.8} onPress={()=>
                        navigation.navigate('GithubLoginScreen')}
                    >
                        <GithubLogo />
                        <Text >깃허브로 시작하기</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
};

export default Login;