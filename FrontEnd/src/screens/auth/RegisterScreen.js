import React from "react";
import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import {View, Text, TextInput} from "react-native";

const RegisterScreen = () => {

    return (
        <ScreenContainer>
        <View>
            <Text>회원가입 페이지</Text>
        </View>
        <View>
            <TextInput placeholder="이름" />
        </View>
        </ScreenContainer>
    );
};

export default RegisterScreen;

