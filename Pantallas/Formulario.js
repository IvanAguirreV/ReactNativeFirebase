import React, { useContext } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LicoresContext } from '../Context/LicoresContext';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase';


const validations = Yup.object().shape({
    id: Yup.number().typeError('Solo insertar numeros').max(9999999, "Numero muy grande").required('Obligatorio'),
    nombre: Yup.string().min(2, 'Nombre muy corto').max(50, 'Nombre muy largo').required('Obligatorio'),
    tipoLicor: Yup.string().nullable().required('Selecciona un tipo de licor'),
    porcentajeAlcohol: Yup.number().typeError('Solo insertar numeros').max(9999, "Numero muy grande").required('Obligatorio'),
    volumenLitros: Yup.number().typeError('Solo insertar numeros').max(9999, "Numero muy grande").required('Obligatorio')
})

export default function Formulario({route, navigation}) {
    const {status} = route.params;

    const { Licor, Lista, setLicor, setLista } = useContext(LicoresContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Información del licor</Text>

            <Formik
                initialValues={Licor}
                onSubmit={(values, { resetForm }) => {
                    firebase.database().ref('Licores-db/'+Licor.id).update(Licor).then(()=>{
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

                validationSchema={validations}
                validate={(values) => {
                    setLicor(values)
                    //console.log(Licor)
                }}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values }) => (
                        <View>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('id')}
                                onBlur={handleBlur('id')}
                                placeholder='Id del licor'
                                value={values.id}
                                editable={status==="add"?true:false}
                            />
                            {errors.id && <Text style={styles.texterror}>{errors.id}</Text>}


                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('nombre')}
                                onBlur={handleBlur('nombre')}
                                placeholder='Nombre del licor'
                                value={values.nombre}
                            />
                            {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}


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
                            {errors.tipoLicor && <Text style={styles.texterror}>{errors.tipoLicor}</Text>}


                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('porcentajeAlcohol')}
                                onBlur={handleBlur('porcentajeAlcohol')}
                                placeholder='Porcentaje de alcohol'
                                value={values.porcentajeAlcohol}
                            />
                            {errors.porcentajeAlcohol && <Text style={styles.texterror}>{errors.porcentajeAlcohol}</Text>}

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('volumenLitros')}
                                onBlur={handleBlur('volumenLitros')}
                                placeholder='Volumen en litros'
                                value={values.volumenLitros}
                            />
                            {errors.volumenLitros && <Text style={styles.texterror}>{errors.volumenLitros}</Text>}


                            <View style={{ marginTop: 20 }}>
                                <Button
                                    buttonStyle={styles.buttons}
                                    onPress={handleSubmit}
                                    title="Enviar"
                                />

                {
                    status==="add"
                    &&
                                <Button
                                    buttonStyle={styles.buttons}
                                    onPress={handleReset}
                                    title="Limpiar"
                                />

                }
                            </View>

                        </View>


                    )

                }

            </Formik>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        marginTop: Constants.statusBarHeight

    },
    texterror: {
        color: 'red'
    },
    textinput: {
        borderRadius: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        paddingLeft: 15,
        backgroundColor: 'white',
        elevation: 5,
    },
    buttons: {
        backgroundColor: 'gray',
        color: 'black',
        marginTop: 10,
        borderRadius: 10
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