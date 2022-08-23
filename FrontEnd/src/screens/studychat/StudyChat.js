import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

// const StudyChat = ({navigation, route}) => {
//     useLayoutEffect(() => {
//         navigation.setOptions({headerTitle: route.params.title || 'Chat'});
//     }, []);
// }

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`

const StudyChat = () => {
    return(
        <Container>
            <Text style={{fontSize: 24}}>Study Chat</Text>
        </Container>
    );
};

export default StudyChat;