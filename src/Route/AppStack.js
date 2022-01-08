import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const { Navigator, Screen } = createStackNavigator();

//  import da minhas pages

import Main from '../Pages/Main';
import Results from '../Pages/Results';


export default function AppStack(){
    return(

        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Main" component={Main} />
                <Screen name="Results" component={Results} />
            </Navigator>

        </NavigationContainer>

    );
}