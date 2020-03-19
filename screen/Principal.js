/*
Autor:Lizeth Trejo Alegria
Descripción:Esta pantalla es la que nos permite mandar llamar a las otras 
pantallas mediante la nevegación
Fecha:02/02/2020
Materia:Desarrollo Movil Multiplataforma
Profesor:Hector Saldaña Benitez
*/
import React, { Component } from 'react';
import { View, Text, Button,Switch,Alert, ActivityIndicator,FlatList } from 'react-native';



class Perfil extends Component {
  constructor (props){
    super(props);
    this.state = {isLoading:true}
  }
  async componentDidMount(){
      try {
      const response = await fetch('http://reactnative.dev/movies.json');
      const responseJson = await response.json();//await esperando la respuesta
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies
      }, function () {
      });
    }
    catch (error) {
      console.error(error);
    }
  }//end componentDidMount

  state = {switchValue:false}
  toggleSwitch = (value) => {
      this.setState({switchValue: value})
   }
   _onPressButton() {  
    Alert.alert('Presionaste el boton!')  
  }  

  render() {
      if(this.isLoading){
          return(
              <View style = {{flex:1,padding:20}}>
                  <ActivityIndicator/>
              </View>

          );
      }

    const navegar = this.props.navigation;
    return (
      <View>
       
        <FlatList
            data={this.state.dataSource}
    renderItem = {({item}) => <Text>Pelicula:{item.title},Año de lanzamiento:{item.releaseYear}</Text>}
    keyExtractor={({id},index)=>id}/>
        <Button
                title='Regresar'
                onPress={() => navegar.navigate('Login')}
              /> 


        <Button 
                title='Mostrar'
                onPress={() => navegar.navigate('Api')}
              /> 
               <Text>{this.state.switchValue?'Switch is ON':'Switch is OFF'}</Text>
      <Switch
        style={{marginTop:30}}
        onValueChange = {this.toggleSwitch}
        alue = {this.state.switchValue}/>  
            
      </View>
     
     
      
     
           
      
     
    );
  }
}

export default Perfil;