/*
Autor:Lizeth Trejo Alegria
Descripción:Esta pantalla es la que nos permite mandar llamar a las otras 
pantallas mediante la nevegación
Fecha:02/02/2020
Materia:Desarrollo Movil Multiplataforma
Profesor:Hector Saldaña Benitez
*/
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Input,Item,Icon} from 'native-base';
import {StyleSheet,AppRegistry,Alert} from 'react-native';
import  api from '../data/api';
class Registro extends Component {
  
  constructor(props){
    super(props)
    this.state={
      user: '',
      pass: '',
      email: ''
    }
  }

  register = () => api.registerData(this.state.user,this.state.pass,this.state.email);
 
  userRegister = () =>{ 

    const {user} = this.state;
    const {pass} = this.state;
    const {email} = this.state;

    fetch('http://192.168.43.207/iot/data/registrar.php',{ 
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        pUsuario: user,
        pPass: pass,
        pEmail: email
      })

    })
    .then((response) => response.text())
      .then((responseData) =>{
       
        Alert.alert("Registro exitoso");
        
      
      })
      .catch((error)=>{
          console.error(error);
      
      });
      
  }
 
  
  render() {
    const navegar = this.props.navigation;
    return (
      <Container>
        <Content contentContainerStyle = {styles.Content}>
          <Card>
            <CardItem header>
            <Text style={styles.TextCenter}>¿No tienes cuenta?</Text>
              
            </CardItem>
            <CardItem >
              <Text style={styles.TextCenter}>Registrate con una red social</Text>
              
           </CardItem>
           <CardItem >
                <Button secundary style={styles.Boton3}><Icon type='Entypo' name='facebook'/></Button>
                <Button info style={styles.Boton2}><Icon type='AntDesign' name='twitter'/></Button>
               
           </CardItem>
            <Text style={styles.TextCenter}>O</Text>
            
            <CardItem>
              <Body bordered style={styles.Botono}>         
              <Item>
                <Icon type = 'FontAwesome'name ='user'/>
                <Input placeholder='Nombre'  onChangeText={(user) => this.setState({user})}/>
                
        
              </Item>
              <Item last>
                <Icon type = 'Entypo'name ='email'/>
                <Input placeholder='Correo' onChangeText={(email) => this.setState({email})} />
              </Item>
              <Item last>
               <Icon type = 'FontAwesome'name ='lock'/>
                <Input placeholder='Contraseña' onChangeText={(pass)=> this.setState({pass})} secureTextEntry={true} />
              </Item>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button primary  style={styles.Boton2} onPress={()=>navegar.navigate('Login')} ><Text> Login</Text></Button>
              <Button success style={styles.Boton} onPress={this.userRegister}><Text> Registrar </Text></Button>
            </CardItem>
        </Card>
        </Content>
      </Container>
    );
  }
}

const styles=StyleSheet.create({
  Content:{
    flex: 1,
    justifyContent: 'center',

  },
  TextCenter:{
    textAlign:'center',
    width:'100%',
  },
  Boton:{
    marginLeft:'28%',
    
  },
  Botono:{
    paddingVertical:'5%',
    

  },
  Boton2:{
    marginRight:'1%',
  },
  Boton3:{
    marginLeft:'30%',
  },
});
export default Registro;