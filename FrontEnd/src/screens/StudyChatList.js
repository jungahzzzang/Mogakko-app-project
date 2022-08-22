import React from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`;

const StudyChatList = ({navigation}) => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>채팅방 목록</Text>
            <Button
                title="채팅방 만들기"
                onPress={() => navigation.navigate('Chat Creation')}
            />
        </Container>
    );
};

export default StudyChatList;