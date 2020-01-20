import React from "react";
import {View,Text, Image, TextInput, StyleSheet} from "react-native";

import logo from "../assets/logo.png";

export default function Login() {
    return (
        <View style={styles.container}>
             <Image source = {logo} />

            <View style = {styles.form}>
                <Text style= {styles.label} > SEU EMAIL * </Text>
            </View>        
        </View> 

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: "bold",
        color: '#444',
        marginBottom: 8
    },
   form : {
       alignSelf: 'stretch',
       paddingHorizontal: 30,
       marginTop: 30
   } 
  });