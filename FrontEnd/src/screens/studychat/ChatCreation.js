import React from "react";
import { StyleSheet, Text, Button, ScrollView, SafeAreaView, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";

const style = StyleSheet.create({
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

const ChatCreation = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text styled={{fontSize: 24}}>채팅방 생성</Text> 
                 </View>
            </ScrollView>
            <Button style={style.button}>
                <Text style={style.buttonText}>+</Text>
            </Button> 
        </SafeAreaView>
    );
};



export default ChatCreation;