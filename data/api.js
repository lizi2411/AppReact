import {Alert} from 'react-native';
 
const URL_DATA = 'http://192.168.43.207/iot/data/';

class API {
    async validarLog(user,pass){
        const query = await fetch(`${URL_DATA}login.php?user=${user}&pass=${pass}`);
        const data = await query.json();
        return data;
    }
    registerData(user,pass,email){
        fetch(`${URL_DATA}registrar.php`,{
            method:'POST',
            body:JSON.stringify({
                pEmail : email,
                pUser : user,
                pPass : pass

            }),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'

            }
        }).then(response => response.text())
        .catch(error => console.error('Error: ',error))
       
    }

}
export default new API();