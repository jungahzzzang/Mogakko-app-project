import React from "react";
import { Text, Button } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";


const StudyChatList = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text style={{fontSize: 24}}>채팅방 목록</Text>
            <Button
                title="채팅방 만들기"
                onPress={() => navigation.navigate('Chat Creation')}
            />
        </ScreenContainer>
    );
};

export default StudyChatList;