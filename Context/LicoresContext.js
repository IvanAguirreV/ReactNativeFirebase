import React, {createContext, useState, useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const LicoresContext = createContext();

const LicoresProvider = (props) =>{
    const [Licor, setLicor] = useState({ 
        id:"",
        nombre:"",
        tipoLicor:"",
        porcentajeAlcohol:"",
        volumenLitros:""
    })

    const [Lista, setLista] = useState([]);

    useEffect(()=>{
        firebase.database().ref('Licores-db').on('value', snapshot=>{
            let LicoresLista=[];
            snapshot.forEach(row=>{
                LicoresLista.push({
                    id:row.key,
                    nombre:row.val().nombre,
                    tipoLicor:row.val().tipoLicor,
                    porcentajeAlcohol:row.val().porcentajeAlcohol,
                    volumenLitros:row.val().volumenLitros
                })
            })

            setLista(LicoresLista)
        })
    },[])

    const eliminar =(id)=>{

        firebase.database().ref('Licores-db/'+id).set(null).then(()=>{
            alert("Eliminado");
        })

        const temporal = Lista.filter((item)=>{
            return item.id!== id;
        })
        setLista(temporal)
    }

    return(
        <LicoresContext.Provider 
        value ={{
            Licor,
            Lista,
            setLicor,
            setLista,
            eliminar
        }}>

        {props.children}

        </LicoresContext.Provider>
    )
}

export default LicoresProvider;