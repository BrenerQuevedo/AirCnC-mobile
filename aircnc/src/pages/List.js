import React, {useState, useEffect } from "react";
import {SafeAreaView, AsyncStorage, Image, StyleSheet,ScrollView,Alert} from "react-native";
import socketio from 'socket.io-client';

//SafeAreaView: permite que os componentes fiquem dentro das áreas visíveis 

import logo from '../assets/logo.png'
import SpotList from "../components/SpotList";

export default function List() {
    const [techs, setTechs] = useState([]);
    

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            const socket = socketio('http://TODO', {
                query: { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })
        })
    }, []);


    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

return (
    <SafeAreaView style = {styles.container} >
        <Image style={styles.logo} source = {logo}/>
        
        <ScrollView>
            {techs.map(tech => <SpotList key={tech} tech={tech} />)}
        </ScrollView>
    </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   logo: {
       height: 32,
       //resizeMode: o conteudo da imagem fica contido dentro do espaço sem que haja cortes no conteudo
       resizeMode: 'contain',
       alignSelf: 'center',
       marginTop: 40,
   }
  });