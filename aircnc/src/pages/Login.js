import React from "react";
import {View, KeyboardAvoidingView ,Text, Image, TextInput, StyleSheet, TouchableOpacity, Platform} from "react-native";

// View: é semelhante a uma div no html
// Text: enquanto no html temos p, span, strong, h1, etc o Text seria uma tag padrão que pode ser estilizada de qualquer forma
//Image: inserir imagens
//TextInput: é o nosso input padrão
//StyleSheet: CSS, porém não é possível fazer uma estilização encadeada
//TouchableOpacity: botão que diminui a opacidade quando clicado
//KeyboardAvoidingView: permite que o teclado não sobreponha o conteudo da aplicação (iOS)

import logo from "../assets/logo.png";

export default function Login() {
    return (
        <KeyboardAvoidingView /*enabled ={Platform.OS === 'ios'}*/ behavior='padding' style={styles.container}>
             <Image source = {logo} />

            <View style = {styles.form}>
                <Text style= {styles.label} > SEU E-MAIL * </Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Seu e-mail'
                        placeholderTextColor='#999'
                        keyboardType='email-address'
                        autoCapitalize="none"
                        autoCorrect= {false}
                />

                <Text style= {styles.label} > TECNOLOGIAS * </Text>
                    <TextInput
                        style = {styles.input}
                        placeholder='Tecnologias de interesse'
                        placeholderTextColor='#999'
                        autoCapitalize="words"
                        autoCorrect= {false}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style ={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>        
        </KeyboardAvoidingView> 

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
   },
   input: {
       borderWidth: 2,
       borderColor: '#ddd',
       paddingHorizontal: 20,
       fontSize: 16,
       color: '#444',
       height: 44,
       marginBottom: 20,
       borderRadius: 2
   },
   button: {
       height: 42,
       backgroundColor: '#f05a5b',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 2
   },
   buttonText: {
       color: '#fff',
       fontWeight: 'bold', 
       fontSize: 16
   }
  });