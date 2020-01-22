import React, { useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import api from "../services/api";

export default function SpotList({ tech }) {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const response = await api.get('/spots', {
                params: {tech}
            })
            //console.log(response.data);
            setSpots(response.data);
        }
        loadSpots();
    }, []);


return (
    <View style={StyleSheet.container}> 
        <Text style ={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>

        <FlatList
            style = {styles.list}
            data = {spots}
            keyExtractor={spot => spot._id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={ ({ item }) => (
                <View style = {styles.listItem}> 
                    <Image style={styles.thumbnail} source={{uri: item.thumbnail_url}} />
                    
                    <Text styles={styles.company}>{item.company}</Text>

                    <Text styles={styles.price}> {item.price ? `R$${item.price}/dia`: "GRATUITO"} </Text>
                    
                    <TouchableOpacity onPress={()=> {}} style ={styles.button}>
                        <Text style={styles.buttonText}> Solicitar reserva </Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 16,
        color: "#444",
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold: {
        fontWeight: 'bold',
    },
});