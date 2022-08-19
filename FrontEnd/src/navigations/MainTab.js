import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Mypage, Notify, StudyChatList } from "../screens";
import { MaterialIcons } from '@expo/vector-icons';
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

const MainTab = ({navigation, route}) => {
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const titles = route.state?.routeNames || ['StudyChats'];
        const index = route.state?.index || 0;
        navigation.setOptions({
            headerTitle : titles[index],
            headerRight : () =>
                index === 0 && (
                    <MaterialIcons
                        name="add"
                        size={26}
                        style={{margin: 10}}
                        onPress={()=>navigation.navigate('Channel Creation')}
                    />
                ),
        });
    }, [route]);

    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: theme.tabActiveColor,
                inactiveTintColor: theme.tabInactiveColor,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'Home' : 'OtherHouses',
                    }),
                }}
            />

            <Tab.Screen
                name="StudyChats"
                component={StudyChatList}
                options={{
                    tabBarIcon :({ focused }) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'Code' : 'IntegrationInstructions',
                    }),
                }}
            />
            <Tab.Screen
                name="Notify"
                component={Notify}
                options={{
                    tabBarIcon: ({focused}) =>
                    TabBarIcon({
                        focused,
                        name: focused ? 'NotificationsActive' : 'NotificationsNone',
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