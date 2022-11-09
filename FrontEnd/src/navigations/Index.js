import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthStack';
<<<<<<< Updated upstream
=======
import MainStack from './MainStack';
import * as Font from 'expo-font';
>>>>>>> Stashed changes

const Navigation = () => {
    return(
        <NavigationContainer>
           <MainStack />
        </NavigationContainer>
    );
};

export default Navigation;