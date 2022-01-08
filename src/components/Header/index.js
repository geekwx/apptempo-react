import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Header(){

    return (

        <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/image/logo/Logo.png')} />
      <Text style={styles.titulo}> App_Tempo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#9DD7EF',
      alignItems: 'center',
  
    },
    logo: {
      marginTop: 90,
      
    },
    titulo: {
      fontFamily: 'Ubuntu_700Bold',
      fontSize: 40,
      color: '#FFF',
      marginTop: 50,
    }
  });