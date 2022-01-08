import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import token from '../../../token.json'


//  import api

import apiAccuWeather from "../../services/apiAccuWeather";
import apiIp from "../../services/apiIp";
import apiLocation from "../../services/apiLocation";

// Importar  Icone
import IconeWeather from '../../components/IconeWeather';


export default function Results(){

    const [location, setLocation] = useState();
    const [weatherNow, setWeatherNow] = useState();
    const [loading, setLoading] = useState(false);
    //Key Api
    const accuweatherAPIKey = token.key;
    const navigation = useNavigation();


    useEffect(()=>{
        //criando a funcao dos request

        async function requestWeather(){
            //capturando ip 
            const getIp = await apiIp.get('ip').then((response) => {
                let ip = response.data.origin;
              return ip 
        })
        .catch((erro) => alert('Não consegui acessar sua internet, verifique'));
        
            //capturando localização
            const getLocation = await apiLocation.get('json.gp?ip='+getIp)
            .then((response) => {
                let data = [];
                data = [
                    response.data.geoplugin_latitude,
                    response.data.geoplugin_longitude
                ];
                setLocation({
                    state: response.data.geoplugin_region,
                    city: response.data.geoplugin_city
                });
                return data;
                     })
                     .catch((erro) => alert('Erro ao acessar a API de localização'));
                     //capturando key da cidade da api 
            const weatherKey = await apiAccuWeather.get('locations/v1/cities/geoposition/search?apikey='+accuweatherAPIKey+'&q='+getLocation[0]+'%2C'+getLocation[1]+'&language=pt-br')
            .then((response) => {
                     let data = response.data.Key
                     return data;
                    })
                    .catch((erro) => alert('Erro ao descobrir o codigo da sua cidade'));
                    //capturando a temperatura atual
                    const weather = await apiAccuWeather.get('currentconditions/v1/'+weatherKey+'?apikey='+accuweatherAPIKey+'&language=pt-br')
                    .then((response) => {
                        let dataR = response.data;
                        setWeatherNow({
                            temperature: dataR[0].Temperature.Metric.Value,
                            subTitle: dataR[0].WeatherText,
                            icone: dataR[0].WeatherIcon,
                        });
                        
                        setLoading(true);
                        
                    } )
                    .catch((erro) => alert('Erro ao descobrir o tempo da sua região'));
                    
                    
        };
        
        requestWeather();
    },[]);

    async function handleGoBack(){
        navigation.goBack();
    };
    //Enquanto carrega
    if (loading == false){
        return(<View style={[styles.container, styles.load]}>
            <ActivityIndicator size="large" color="#FFF"/>
        </View>);
    }
    
    return(
        <View style={styles.container}>
    
             
            <IconeWeather icone={weatherNow.icone} />
    
            <View style={styles.viewTemperature}> 
            <Text style={styles.temperature} > {weatherNow.temperature} ºC</Text>
            <Text style={styles.subTemperature}> {weatherNow.subTitle}</Text>
            </View>
    
            <View style={styles.viewCity}>
            <Text style={styles.state}> {location.state}</Text>
            <Text style={styles.city}> {location.city}</Text>
            </View>
            <View style={styles.viewButton}> 
                <TouchableOpacity onPress={handleGoBack}>
                    <Text style={styles.button}>Voltar</Text>
                </TouchableOpacity>
            </View>
            
        </View>) ;
    
    
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#9DD7EF',
        alignItems: 'center',
        alignContent: 'center'

    }, 
    load :{
        justifyContent: 'center'
    },
    imagem: {
        marginTop: 80,
        height: 100,
        width: 100,
    }, 
    viewTemperature:{
        marginTop: 50,
        alignItems: 'center'

    },

    temperature: {
        fontSize: 30,
        color: '#FFF',
    }, 
    subTemperature: {
        fontSize: 25,
        color: '#FFF',
    },
    viewCity:{
        marginTop: 50,
        alignItems: 'center'


    },


    state: {
        fontSize: 22,
        color: '#FFF',
    },
    city:{
        fontSize: 22,
        color: '#FFF',
    }, 
    viewButton: {
        height: 50,
        width: 200,
        backgroundColor: '#FFF',
        justifyContent: 'center' ,
        borderRadius: 16, 
        marginTop: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        alignItems: 'center'


    }, 
    button: {
        fontFamily: 'Ubuntu_700Bold',
      fontWeight: "bold",
      color: '#9DD7EF',
      fontSize: 18
    }


});