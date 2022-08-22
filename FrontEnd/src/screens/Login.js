import React from "react";
import styled from "styled-components";
import { Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import {KakaoButton, NaverButton} from "../utils/OAuth";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.background};
`;


const Login = ({navigation}) => {
    return(
        <Container>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('KakaoLoginScreen')}> */}
            <TouchableOpacity onPress={()=>navigation.navigate('KakaoLoginScreen')}>
            <Image source={KakaoButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('NaverLogin')}>
            <Image source={NaverButton} style={{width: 300, height: 45,  borderRadius:7, marginTop: 10}}/>
            </TouchableOpacity>
            {/* <Button title="Signup" onPress={()=>navigation.navigate('Signup')} /> */}
        </Container>
    );
};

export default Login;