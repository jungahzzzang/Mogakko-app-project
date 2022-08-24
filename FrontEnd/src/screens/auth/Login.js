import React from "react";
import styled from "styled-components";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import {KakaoButton, NaverButton, GithubButton} from '../../utils/Images';

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
        borderRadius: 10
    },
    buttonLogo: {
        position: "absolute",
        marginLeft: 20
    }
})


const Login = ({navigation}) => {
    return(
        <Container>
            <View >
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('KakaoLoginScreen')}>
                    <Image source={KakaoButton} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('NaverLoginScreen')}>
                    <Image source={NaverButton} style={{width: 300, height: 45,  borderRadius:7, marginTop: 10}}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        ...styles.socialLoginBtn,
                        backgroundColor: '#fff'
                    }}
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate('GithubLoginScreen')}>
                    <Image source={GithubButton} style={styles.buttonLogo} />
                    <Text>깃허브로 로그인</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
};

export default Login;