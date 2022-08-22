import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import { createStackNavigator } from '@react-navigation/stack';
import KakaoLoginScreen from "../components/KakaoLoginScreen";

const Stack = createStackNavigator();

// const screenOptions = {
//     headerShown: false,
// };

const AuthStack = () => {

    const theme = useContext(ThemeContext);

    return(
    
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
                cardStyle: {backgroundColor: theme.backgroundColor},
            }}
        >
           
            <Stack.Screen name="KakaoLoginScreen" component={KakaoLoginScreen} />
        </Stack.Navigator>
 
    );
};

export default AuthStack;