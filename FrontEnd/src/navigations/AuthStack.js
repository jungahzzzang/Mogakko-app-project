import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//각 페이지
import Login from '../screens/auth/Login';
import KakaoLoginScreen from '../screens/auth/KakaoLoginScreen';
import NaverLoginScreen from "../screens/auth/NaverLoginScreen";
import GithubLoginScreen from "../screens/auth/GithubLoginScreen";

const Stack = createNativeStackNavigator();
// const screenOptions = {
//     headerShown: false,
// };

const AuthStack = () => {

    const theme = useContext(ThemeContext);

    return(
    
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center',
                //cardStyle: {backgroundColor: theme.backgroundColor},
            }}
        >
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="KakaoLoginScreen" component={KakaoLoginScreen} />
           <Stack.Screen name="NaverLoginScreen" component={NaverLoginScreen} />
           <Stack.Screen name="GithubLoginScreen" component={GithubLoginScreen} />
        </Stack.Navigator>
 
    );
};

export default AuthStack;