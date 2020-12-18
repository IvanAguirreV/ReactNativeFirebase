import { Formik } from 'formik';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LicoresContext } from '../Context/LicoresContext';
import Constants from 'expo-constants';
import { Picker } from '@react-native-picker/picker';


export default function Formulario({ navigation }) {

    const { Licor, Lista, setLicor, setLista, tipoLicor } = useContext(LicoresContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}></Text>
            <Formik
                initialValues={Licor}
                onSubmit={(values, { resetForm }) => {
                    firebase.database().ref('Licores-db/' + Licor.id).update(Licor).then(() => {
                        alert("Enviado")
                    })
                    const temporal = Lista.filter(Lic => Lic.id != Licor.id);
                    // alert('Enviado')
                    setLista([...temporal, Licor]);
                    resetForm({
                        id: "",
                        nombre: "",
                        tipoLicor: "",
                        porcentajeAlcohol: "",
                        volumenLitros: ""
                    })
                    //console.log(Lista)
                    navigation.goBack();
                }}

            >
                {
                    ({ handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values }) => (

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{ height: 40, backgroundColor: 'white' }}
                                selectedValue={values.tipoLicor}
                                onValueChange={(V) =>
                                    setFieldValue('tipoLicor', V)
                                }
                            >
                                <Picker.Item color="gray" label="Tipo de licor" value="" />
                                <Picker.Item color="black" label="Licor de cafe" value="Licor de cafe" />
                                <Picker.Item color="black" label="Licor de frutas" value="Licor de frutas" />
                                <Picker.Item color="black" label="Licor de hierbas" value="Licor de hierbas" />
                                <Picker.Item color="black" label="Ron" value="Ron" />
                                <Picker.Item color="black" label="Tequila" value="Tequila" />
                                <Picker.Item color="black" label="Whisky" value="Whisky" />
                                <Picker.Item color="black" label="Vodka" value="Vodka" />
                                <Picker.Item color="black" label="Ginebra" value="Ginebra" />
                            </Picker>
                        </View>
                    )
                }

            </Formik>

            <ScrollView>
        {                

            Lista.length>0
            ?
            Lista.filter(Licor => Licor.tipoLicor).map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{a.tipoLicor}</ListItem.Subtitle>
                        <ListItem.Subtitle>{a.porcentajeAlcohol + '% de contenido alcoholico'}</ListItem.Subtitle>
                        <ListItem.Subtitle>{a.volumenLitros + ' Litro(s) de contenio'}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay licores</Text>

        }
        </ScrollView>



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 20,
        marginTop: Constants.statusBarHeight

    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40
    },
    picker: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        overflow: 'hidden',
        elevation: 5,
    }

});