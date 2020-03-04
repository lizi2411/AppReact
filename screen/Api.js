/*
Autor:Lizeth Trejo Alegria
Descripción:Esta pantalla es la que nos permite mandar llamar a las otras 
pantallas mediante la nevegación
Fecha:02/02/2020
Materia:Desarrollo Movil Multiplataforma
Profesor:Hector Saldaña Benitez
*/
import React, { Component } from 'react';
import { View,ActivityIndicator,FlatList,Text } from 'react-native';
class Api extends Component
{
    constructor (props){
        super(props);
        this.state = {isLoading:true}
      }
      async componentDidMount(){
          try {
              const response = await fetch('https://swapi.co/api/films');
              const responseJson = await response.json();
              this.setState({
                  isLoading: false,
                  dataSource: responseJson.results
              }, function () {
              });
          }
          catch (error) {
              console.error(error);
          }
      }//end componentDidMount
    render(){
        if(this.isLoading){
            return(
                <View style = {{flex:1,padding:20}}>
                    <ActivityIndicator/>
                </View>
  
            );
        }
  
        return(
            <View>
                 <FlatList
            data={this.state.dataSource}
        renderItem = {({item}) => <Text>Capitulo:{item.title},Director:{item.director},Fecha de lanzamiento:{item.release_date}</Text>}
         keyExtractor={({episode_id},index)=>episode_id}/>
                  
               
            </View>
        );
    }
}
export default Api;