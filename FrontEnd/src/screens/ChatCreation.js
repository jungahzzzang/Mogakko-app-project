import React from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`;

const ChatCreation = ({navigation}) => {
    return (
        <Container>
            <Text styled={{fontSize: 24}}>채팅방 생성</Text>
            <Button title="채팅방 만들기" onPress={() => navigation.navigate('Chat')} />
        </Container>
    );
};



export default ChatCreation;