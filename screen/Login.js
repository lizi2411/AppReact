/*
Autor:Lizeth Trejo Alegria
Descripción:Esta pantalla es la que nos permite mandar llamar a las otras 
pantallas mediante la nevegación
Fecha:02/02/2020
Materia:Desarrollo Movil Multiplataforma
Profesor:Hector Saldaña Benitez
*/
import React, { Component } from "react";
import { Container, View, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon } from "native-base";


import {
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';
import api from '../data/api';



class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      pass : ''
    
    }
  }
  login = async () => {
    let validarlog = await api.validarLog(this.state.username,this.state.pass)
    if(validarlog.status == 1){
      this.props.navigation.navigate('Principal');
    }
    else
    {
      Alert.alert('Usuario o contraseña invalidos ');

    }
  }
    userLogin = () =>{ 

      const {username} = this.state;
      const {pass} = this.state;
 
  
      fetch('http://192.168.43.207/iot/data/login.php',{ 
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          pUsuario: username,
          pPass: pass
          
        })
  
      })
      .then((response) => response.text())
        .then((responseData) =>{
         
          Alert.alert("Bienvenido")
          if(responseData == 1){
            this.props.navigation.navigate('Principal');
          }
          else
          {
            Alert.alert('Usuario o contraseña invalidos ');
      
          }
          
        
        })
        .catch((error)=>{
            console.error(error);
        
        });
        
    }
    
  
 
  render(){
  const navegar = this.props.navigation;
 
    return (
        <>
        
        <Container>
            <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>
                <CardItem header bordered style= {misEstilos.arribaTexto}>
    <Text style = {misEstilos.textCenter} >Login</Text>
                </CardItem>
                <CardItem bordered style= {misEstilos.abajoDatos}>
                <Body style = {misEstilos.body}>
                    <Item lineLabel>
                        <Icon type = 'FontAwesome' name = 'user-circle-o'></Icon>
                        <Input type="text" 
                                placeholder="Usuario"
                                onChangeText= {(username) => this.setState({username})}
                        />

                    </Item>
                  
                    <Item lineLabel>
                        <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                        <Input type="text" placeholder = 'Constraseña' 
                            onChangeText= {(pass) => this.setState({pass})}/>
                    </Item>
                </Body>
                </CardItem>
                <CardItem footer bordered style = {misEstilos.pie}>
                
                
                <Button success onPress={() => navegar.navigate('Registro')} ><Text> Registrarse </Text></Button>
            
                </CardItem>
                <CardItem footer bordered style = {misEstilos.pie}>
                
                <Button primary onPress={this.userLogin} ><Text> Iniciar Sesión </Text></Button>
                </CardItem>
            </Card>
            </Content>
        </Container>
        
        
        </>
    );
    }
  }



const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFCC66'
  
  },

  textCenter: {
    textAlign: 'center',
    width: '100%',
    color: 'white'
  },

  pie: {
    justifyContent: 'center',
    backgroundColor: '#090C2A'
  },

  centrar: {
    flex: 1,
    marginLeft: '50%',
    justifyContent: 'center'
  },

  body: {
    paddingVertical: 35,
  },

  arribaTexto: {
    backgroundColor: '#090C2A'
  },

  abajoDatos: {
    backgroundColor: '#99CCCC'
  }
});

export default Login;