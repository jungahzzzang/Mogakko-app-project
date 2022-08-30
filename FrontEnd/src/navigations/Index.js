import React, {useEffect, useState} from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthStack';
import * as Font from 'expo-font';

const Navigation = () => {

    const [fontLoad, setFontLoad] = useState(false)

    //font 불러오기
    useEffect(() => {
        const Load = async()=>{
            await Font.loadAsync({
                'SpoqaHanSansNeo' : require('../../assets/fonts/SpoqaHanSansNeo-Light.ttf')
            })
            setFontLoad(true)
        }
        Load()
    },[])

    return(
        fontLoad?
        <NavigationContainer>
           <AuthStack />
        </NavigationContainer>
        :
        <View>
            <Text>Loading...</Text>
        </View>
    );
};

export default Navigation;