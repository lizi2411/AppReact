/*
Autor:Lizeth Trejo Alegria
Descripción:Esta pantalla es la que nos permite mandar llamar a las otras 
pantallas mediante la navegación
Fecha:02/02/2020
Materia:Desarrollo Movil Multiplataforma
Profesor:Hector Saldaña Benitez
*/
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Principal from './screen/Principal';
import  Api from './screen/Api';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}/>
        <Stack.Screen
          name='Registro'
          component={Registro}/>
         <Stack.Screen
          name='Principal'
          component={Principal}/>
          <Stack.Screen
          name='Api'
          component={Api}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
