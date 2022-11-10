import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'; 
import { ThemeContext } from "styled-components";
//각 페이지
import StudyChatList from "../screens/studychat/StudyChatList";
import MainScreen from "../screens/main/MainScreens";
import Mypage from "../screens/Mypage";
import NotifyList from "../screens/notify/NotifyList";

const Tab = createBottomTabNavigator();

const TabBarIcon = ({focused, name}) => {
    const theme = useContext(ThemeContext);
    return(
        <Ionicons
            name={name}
            size={26}
            color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
        />
    );
};

const MainTab = () => {
    const theme = useContext(ThemeContext);
    return(
            <Tab.Navigator
            tabBarOptions={{
                activeTintColor: theme.tabActiveColor,
                inactiveTintColor: theme.tabInactiveColor,
            }}
        >
            <Tab.Screen
                name="메인페이지"
                component={MainScreen}
                options={{
                    headerShown: false,
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'home' : 'home-outline',
                    }),
                }}
            />
            <Tab.Screen
                name="스터디"
                component={StudyChatList}
                options={{
                    headerShown: false,
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'cafe' : 'cafe-outline',
                    }),
                }}
            />
            <Tab.Screen
                name="채팅"
                component={NotifyList}
                options={{
                    headerShown: false,
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline',
                    }),
                }}
            />
        
            <Tab.Screen
                name="마이페이지"
                component={Mypage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'person' : 'person-outline',
                    }),
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTab;