import React, {useState, useEffect } from "react";
import {SafeAreaView, Text, AsyncStorage, Image, StyleSheet} from "react-native";

//SafeAreaView: permite que os componentes fiquem dentro das áreas visíveis 

import logo from '../assets/logo.png'
import SpotList from "../components/SpotList";

export default function List() {
    const [techs, setTechs] = useState([]);
    
    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    }, []);

return (
    <SafeAreaView style = {styles.container} >
        <Image style={styles.logo} source = {logo}/>

        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
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