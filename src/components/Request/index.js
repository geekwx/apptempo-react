import apiAccuWeather from "../../services/apiAccuWeather";
import apiIp from "../../services/apiIp";
import apiLocation from "../../services/apiLocation";
import token from "../../../token.json"


//  key da api do accuweather
const accuweatherAPIKey = token.key;


//  Funcao para identificar o ip do usuario
export async function  getIp(){
    await apiIp.get('ip').then((response) => {
        let ip = response.data.origin;
        return(ip);
    });
}

//  Funcao para pegar a localização do cliente
export async function getLocation(){
    await apiLocation('json.gp?ip='+getIp)
    .then((response) => {
        const objLocalitation = response.data; 
      
        const localitation = [ objLocalitation.geoplugin_region,
            objLocalitation.geoplugin_city,
            objLocalitation.geoplugin_latitude,
            objLocalitation.geoplugin_longitude
        ]   
      
        console.log(localitation);
        return  localitation;


    })
    .catch((erro) => alert('erro ao pegar o ip ' + erro) );
}

//  Funcao para pegar o codigo usado pela api



export async function getCodeWeatherApi( latitude, longetude ){
    alert(latitude + " " + longetude);
    
await apiAccuWeather('locations/v1/cities/geoposition/search?apikey='+accuweatherAPIKey+'&q='+latitude+'%2C'+longetude+'&language=pt-br')
    .then((response) => {
        const objCodigo = response.data;
        const Codigo = JSON.stringify(objCodigo.Key);
        console.log(Codigo);

        return Codigo;

    })
    .catch((error) => {alert('Nao obtive o codigo da cidade ' + error )});


}
export async function setPush(){
    await getLocation()
    .then((response) => {
        console.log(response)
        apiAccuWeather(response.latitude, response.longetude)
            .then((response) => alert(response) ) 
            .catch((error) => alert('erro ao executar o get key api '+ error) );
    })
    .catch((error) => alert('Mão conseguir resolver o getlocation '+ error));
}
// Criar agora api e a conexao para obter o tempo
async function getWeather(){


}

