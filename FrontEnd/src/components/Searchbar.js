import React, {forwardRef, useState} from "react";
import {View, TextInput} from "react-native";
import {Ionicons,Entypo} from '@expo/vector-icons';
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.View`
    top: 50;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
`;

const StyledTextInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor : theme.inputPlaceholder,
}))`
    border: 1px solid
        ${({theme, isFocused}) => (isFocused ? theme.text : theme.inputBorder)};
    background-color: ${({ theme, editable }) =>
            editable? theme.background : theme.inputDisabledBackground};
    padding: 20px 10px;
    font-size : 16px;
    border-radius: 15;
`;

const SearchBar = forwardRef (
    ({
        placeholder,
        value,
        onChangeText,
        onBlur

    }, ref) => {
            const [isFocused, setIsFocused] = useState("");

            return(
                <Container>
                    <View>
                        <View>
                            <Ionicons name="search" size={20} color="black" />
                            <StyledTextInput
                                isFocused = {isFocused}
                                onChangeText= {onChangeText}
                                ref={ref}
                                placeholder={placeholder}
                                value={value}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => {setIsFocused(false); onBlur();}}
                            />
                        </View>
                    </View>
                </Container>
            );
        }
    );

SearchBar.defaultProps = {
    onBlur: () => {},
    onChangeText: () => {},
};

SearchBar.propTypes = {
    value : PropTypes.string.isRequired,
    onChangeText: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string
}

export default SearchBar;