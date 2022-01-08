import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function IconeWeather({icone}){

    const iconecode = {
        1 : 'https://developer.accuweather.com/sites/default/files/01-s.png',
        2 : 'https://developer.accuweather.com/sites/default/files/02-s.png',
        3 : 'https://developer.accuweather.com/sites/default/files/03-s.png',
        4 : 'https://developer.accuweather.com/sites/default/files/04-s.png',
        5 : 'https://developer.accuweather.com/sites/default/files/05-s.png',
        6 : 'https://developer.accuweather.com/sites/default/files/06-s.png',
        7 : 'https://developer.accuweather.com/sites/default/files/07-s.png',
        8 : 'https://developer.accuweather.com/sites/default/files/08-s.png',
        11 : 'https://developer.accuweather.com/sites/default/files/11-s.png',
        12 : 'https://developer.accuweather.com/sites/default/files/12-s.png',
        13 : 'https://developer.accuweather.com/sites/default/files/13-s.png',
        14 : 'https://developer.accuweather.com/sites/default/files/14-s.png',
        15 : 'https://developer.accuweather.com/sites/default/files/15-s.png',
        16 : 'https://developer.accuweather.com/sites/default/files/16-s.png',
        17 : 'https://developer.accuweather.com/sites/default/files/17-s.png',
        18 : 'https://developer.accuweather.com/sites/default/files/18-s.png',
        19 : 'https://developer.accuweather.com/sites/default/files/19-s.png',
        20 : 'https://developer.accuweather.com/sites/default/files/20-s.png',
        21 : 'https://developer.accuweather.com/sites/default/files/21-s.png',
        22 : 'https://developer.accuweather.com/sites/default/files/22-s.png',
        23 : 'https://developer.accuweather.com/sites/default/files/23-s.png',
        24 : 'https://developer.accuweather.com/sites/default/files/24-s.png',
        25 : 'https://developer.accuweather.com/sites/default/files/25-s.png',
        26 : 'https://developer.accuweather.com/sites/default/files/26-s.png',
        29 : 'https://developer.accuweather.com/sites/default/files/29-s.png',
        30 : 'https://developer.accuweather.com/sites/default/files/30-s.png',
        31 : 'https://developer.accuweather.com/sites/default/files/31-s.png',
        32 : 'https://developer.accuweather.com/sites/default/files/32-s.png',
        33 : 'https://developer.accuweather.com/sites/default/files/33-s.png',
        34 : 'https://developer.accuweather.com/sites/default/files/34-s.png',
        35 : 'https://developer.accuweather.com/sites/default/files/35-s.png',
        36 : 'https://developer.accuweather.com/sites/default/files/36-s.png',
        37 : 'https://developer.accuweather.com/sites/default/files/37-s.png',
        38 : 'https://developer.accuweather.com/sites/default/files/38-s.png',
        39 : 'https://developer.accuweather.com/sites/default/files/39-s.png',
        40 : 'https://developer.accuweather.com/sites/default/files/40-s.png',
        41 : 'https://developer.accuweather.com/sites/default/files/41-s.png',
        42 : 'https://developer.accuweather.com/sites/default/files/42-s.png',
        43 : 'https://developer.accuweather.com/sites/default/files/43-s.png',
        44 : 'https://developer.accuweather.com/sites/default/files/44-s.png',
        

    };
    
    const urlIcone = iconecode[icone];
    return (
        <View>
            <Image style={styles.imagem} source={{uri: urlIcone}} />
        </View>
    );
}
const styles = StyleSheet.create({
    imagem: {
        marginTop: 80,
        height: 100,
        width: 100,
    },
})