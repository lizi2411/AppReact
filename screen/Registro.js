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
import {StyleSheet} from 'react-native';
class Registro extends Component {
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
                
                <Input placeholder='Nombre'/>
                <Icon type = 'FontAwesome'name ='user'/>
                <Input placeholder='Usuario' />
              </Item>
              <Item last>
                <Icon type = 'Entypo'name ='email'/>
                <Input placeholder='Correo' />
              </Item>
              <Item last>
                <Icon type = 'Entypo'name ='phone'/>
                <Input placeholder='Número de telefono' />
              </Item>
              <Item last>
               <Icon type = 'FontAwesome'name ='lock'/>
                <Input placeholder='Contraseña' />
              </Item>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button style={styles.Boton}><Text> Registrar </Text></Button>
              <Button transparent onPress={() => navegar.navigate('Login')}></Button>
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
    marginLeft:'55%',
    
  },
  Botono:{
    paddingVertical:'5%',
    

  },
  Boton2:{
    marginRight:'30%',
  },
  Boton3:{
    marginLeft:'30%',
  },
});
export default Registro;