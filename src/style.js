import React from "react";
import { StyleSheet, Dimensions } from "react-native";


const windowWidth = Dimensions.get('window')
const windowHeight = Dimensions.get('window')


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.6)",
        height: windowHeight.height - 25,

    },

    image: {
        flex: 1,
        width: windowWidth.width,
        height: windowHeight.height,
    },

    textFor: {
        color: "white",
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",

    },

    inputText: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "rgba(211,211,211,0.2)",
        width: windowWidth.width - 70,
        margin: 5,
        borderRadius: 5
    },

    button: {
        backgroundColor: "rgba(255,0,0,0.5)",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 20
    },

    textButton: {
        fontSize: 18,
        color: "black",
        justifyContent: "center",
        fontWeight: "bold",
    },

});

export default styles;