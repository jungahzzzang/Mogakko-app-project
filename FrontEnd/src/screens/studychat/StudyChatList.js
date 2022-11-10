import React from "react";
import { Animated, Text, Button, SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import ActionButton from "react-native-action-button";
import {FontAwesome, Ionicons} from '@expo/vector-icons'; 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:10
    },
    textStyle:{
        fontSize: 16,
    },
    button: {
        backgroundColor: "#fc454e",
        width: 66, 
        height: 66,
        borderRadius: 33,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20
    },
    buttonText: {
        color: "white",
        fontSize: 45,
        marginBottom: 6
    }
})

const StudyChatList = ({navigation}) => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
            <Text style={styles.textStyle} >채팅방 목록</Text>
            <ActionButton buttonColor="#1D5349" buttonTextStyle={styles.buttonText}>
                <ActionButton.Item
                    buttonColor="#1D5349"
                    title="스터디모집"
                    onPress={() => navigation.navigate('Chat Creation')}
                >
                    <FontAwesome name="pencil-square-o" size={24} color="white" />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#1D5349"
                    title="알림"
                    onPress={() => navigation.navigate('Chat')}
                >
                    <Ionicons name="notifications" size={24} color="white" />
                </ActionButton.Item>
            </ActionButton>
            </View>
        </SafeAreaView>
    );
};

export default StudyChatList;