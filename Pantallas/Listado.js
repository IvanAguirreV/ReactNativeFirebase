import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LicoresContext} from '../Context/LicoresContext';

const Listado =({navigation})=>{

    const {Lista, setLicor, setLista, eliminar} = useContext(LicoresContext);

    return(
    
    <View style={styles.container}>
        <Text>te</Text>

        <Header
            centerComponent={{ text: 'Licores', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'add', color: '#fff', onPress:()=>{
                navigation.navigate('Formulario',{status:"add"})

                 setLicor({
                    id:null,
                    nombre:"",
                    tipoLicor:"",
                    porcentajeAlcohol:"",
                    volumenLitros:""
                 })   

            }}}
            containerStyle={{backgroundColor:'#434343'}}
        />

<ScrollView>
        {
            Lista.length>0
            ?
            Lista.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{a.tipoLicor}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.id)}/>
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setLicor({
                                id:a.id.toString(),
                                nombre:a.nombre,
                                tipoLicor:a.tipoLicor,
                                porcentajeAlcohol:a.porcentajeAlcohol,
                                volumenLitros:a.volumenLitros
                            })

                            navigation.navigate('Formulario',{status:"edit"})
                        }}/>

                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay licores</Text>


        }


        </ScrollView>
    </View>)


}

export default Listado;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});
