import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components";

const StyledTextInput = styled.View`
    flex: 1;
    width: 300;
    height: 40;
    border-bottom-width: 1;
    font-size: 17;
`;

const SignupInput = ({userInput, setUserInput, onSubmit}) => {
    
    return (
        <TextInput
            style={StyledTextInput}
            placeholder="닉네임을 입력해 주세요"
            onChangeText={(text) => setUserInput(text)}
            onSubmitEditing={onSubmit}
            clearTextOnFocus={false}
            allowFontScaling={false}
            value={userInput}
        />
    );
};

export default SignupInput;