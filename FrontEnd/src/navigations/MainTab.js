import React, {useContext} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StudyChatList from "../screens/StudyChatList";
import Mypage from "../screens/Mypage";
import {MaterialIcons} from '@expo/vector-icons';
import { ThemeContext } from "styled-components";

const Tab = createBottomTabNavigator();

const TabBarIcon = ({focused, name}) => {
    const theme = useContext(ThemeContext);
    return(
        <MaterialIcons
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
                name="Chat List"
                component={StudyChatList}
                options={{
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'code' : 'developer-mode',
                    }),
                }}
            />
           
            <Tab.Screen
                name="Mypage"
                component={Mypage}
                options={{
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