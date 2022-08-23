import React, {useContext} from "react";
import { SafeAreaView, Platform } from "react-native";
import { ThemeContext } from "styled-components";

const ScreenContainer = props => {
    const theme = useContext(ThemeContext);

    return (
        <SafeAreaView flex={1} style={{
            backgroundColor: props.backgroundColor || theme.backgroundColor,
            paddingTop: Platform.OS === 'android' ? 24 : 0,
        }}
        >
            {props.children}
        </SafeAreaView>
    )
}

export default ScreenContainer;