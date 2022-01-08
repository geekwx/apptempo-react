import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';



export default function Main(){

    const navigation = useNavigation();


    function handleWeather(){
        navigation.navigate('Results');
        
    }
    return (

        <View style={styles.container}>
     
        <Header/>
          <View style={styles.viewBotao}>
            <TouchableOpacity onPress={handleWeather}>
          <Text style={styles.botao}>Qual é a temperatura ?</Text>
          </TouchableOpacity>
          </View>
         
        </View>
      );


}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#9DD7EF',
      alignItems: 'center',
  
    },
    viewBotao: {
      height: 50,
      width: 200,
      backgroundColor: '#FFF',
      justifyContent: 'center' ,
      borderRadius: 16, 
      marginTop: 120,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    botao: {
      fontFamily: 'Ubuntu_700Bold',
      fontWeight: "bold",
      color: '#9DD7EF',
      fontSize: 18
    }
  
  });