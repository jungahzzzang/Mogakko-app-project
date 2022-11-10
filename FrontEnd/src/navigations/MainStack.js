import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import StudyChat from "../screens/studychat/StudyChat";
import ChatCreation from "../screens/studychat/ChatCreation";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
    
    const theme = useContext(ThemeContext);

    return(
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
                headerTintColor: theme.headerTintColor,
                cardStyle: {backgroundColor: theme.backgroundColor},
                headerBackTitleVisible: false,
            }}
        >
        
            <Stack.Screen name="Main" component={MainTab} />
            <Stack.Screen name="Chat Creation" component={ChatCreation} />
            <Stack.Screen name="Chat" component={StudyChat} />
        </Stack.Navigator>
    );
};

export default MainStack;