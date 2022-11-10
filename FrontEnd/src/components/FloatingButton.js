import React from "react";
import {TouchableOpacity, View, StyleSheet, Text} from "react-native";
import styled from "styled-components";
import {Ionicons} from '@expo/vector-icons';

const styles = StyleSheet.create({
    floatBtn: {
        position: "absolute",
        width: 50,
        height: 50,
        backgroundColor: "#F5B4A7",
        alignItems: "center",
        justifyContent: "center",
        right: 20,
        bottom: 20,
        borderRadius: 30
    },
    plus: {
        fontSize: 40,
        color: "white"
    }
})

const FloatingButton = () => {
    return(
        <View>
        <TouchableOpacity activeOpacity={0.7} style={styles.floatBtn}>
            <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
        </View>
    )
}

export default FloatingButton;