import React, { Component } from "react";
import { Text, TextInput, View, Image, ImageBackground, TouchableOpacity, ScrollView, KeyboardAvoidingView, } from "react-native";
import LoginNetflix from "./img/LoginNetflix.png"
import icone from "./img/icone.png"
import styles from "./style";

export default class Home extends Component {

    render() {
        
        return (
            <ImageBackground source={LoginNetflix} style={styles.image}>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={{ alignItems: "center" }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={icone} />
                                    <View>
                                        <TextInput placeholder="Email or phone númber" placeholderTextColor="#878787" style={styles.inputText}></TextInput>
                                        <TextInput placeholder="Password" placeholderTextColor="#878787" style={styles.inputText} secureTextEntry={true}></TextInput>
                                        <View>
                                            <TouchableOpacity>
                                                <Text style={styles.textFor}>Forgot Password ?</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={styles.button}>
                                            <Text style={styles.textButton}>ENTRAR</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={styles.textFor}>New to Netflix ? Sign up now.</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View >
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    };
};