import React from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

const ChatCreation = ({navigation}) => {
    return (
        <ScreenContainer>
            <Text styled={{fontSize: 24}}>채팅방 생성</Text>
            <Button title="채팅방 만들기" onPress={() => navigation.navigate('Chat')} />
        </ScreenContainer>
    );
};



export default ChatCreation;