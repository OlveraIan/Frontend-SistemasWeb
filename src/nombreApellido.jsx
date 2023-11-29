import {TextField,Box,Button} from '@mui/material';
// eslint-disable-next-line no-unused-vars
import React,{useEffect,useState} from 'react';
import axios from "axios";

function NombreApellido() 
{
    
    const [Cargando, setCargando] = useState(false)

    const [datosFormulario, setDatosFormulario] =useState({
        nombre:'',
        apellido:''
    })
    const [Id, setId] =useState({
        id:''
    })

    const crear = async (evento) => {
        evento.preventDefault()
        
        console.log("nombre ",datosFormulario.nombre)
        console.log("apellido ",datosFormulario.apellido)
        // eslint-disable-next-line no-useless-catch
        setCargando(true)
        await axios.post('http://localhost:4567/users/',datosFormulario)
        .then(function (res) {
            console.log("datos en return ",res);
            setCargando(false)
            return(res.data);
            
        })
        .catch(function(error){
            console.log(error);
            setCargando(false);
        });            
    }
    const leer = async (evento) => {
        evento.preventDefault()
        await axios.get('http://localhost:4567/users/',Id)
        .then(function (res) {
            console.log("datos en return ",res);
            setCargando(false)
            return(res.data);
            
        })
        .catch(function(error){
            console.log(error);
            setCargando(false);
        });   
    }
    const actualizar = async (evento) => {
        evento.preventDefault()
        await axios.put('http://localhost:4567/users/:id',{
            id:Id.id,
            nombre:datosFormulario.nombre,
            apellido:datosFormulario.apellido            
        })
        .then(function (res) {
            console.log("datos en return ",res);
            setCargando(false)
            return(res.data);
            
        })
        .catch(function(error){
            console.log(error);
            setCargando(false);
        });    
        
    }
    const borrar = async (evento) => {
        evento.preventDefault()
        await axios.delete('http://localhost:4567/users/:id',Id)
        .then(function (res) {
            console.log("datos en return ",res);
            setCargando(false)
            return(res.data);
            
        })
        .catch(function(error){
            console.log(error);
            setCargando(false);
        });    
    }

    const cambiosFormulario = (evento) => {
        const {name, value} = evento.target
        setDatosFormulario({...datosFormulario,[name]:value})
        setId({...Id,[name]:value})
    }
    return(
        <>
            <h1>Registro Nombre y Apellido</h1>
            
            <form >
                <Box m={5}>
                    <TextField
                    label= 'Nombre:'
                    variant='outlined'
                    fullWidth
                    /* en cambios al formulario, actualizar los datos del portador de los datos */
                    onChange = {cambiosFormulario}
                    name= 'nombre'
                    /* que valor va a cambiar el elemento de input */
                    value = {datosFormulario.nombre}>
                    </TextField>
                </Box>
                <Box m={5}>
                    <TextField
                    label = 'Apellido:'
                    variant = 'outlined'
                    fullWidth
                    onChange ={cambiosFormulario}
                    name='apellido'
                    value={datosFormulario.apellido}
                    ></TextField>
                </Box>
                <Box m={5}>
                    <TextField
                    label= 'Id:'
                    variant='outlined'
                    fullWidth
                    /* en cambios al formulario, actualizar los datos del portador de los datos */
                    onChange = {cambiosFormulario}
                    value={Id.id}
                    name= 'id'
                    >
                    </TextField>
                </Box>
                <Box m={5}>
                    <Button
                    variant='contained'
                    type='create'
                    color='primary'
                    fullWidth
                    disabled={Cargando}
                    onClick={crear}
                    >
                        Registrar valores
                    </Button>
                </Box>
                <Box m={5}>
                    <Button
                    variant='contained'
                    type='read'
                    color='primary'
                    fullWidth
                    disabled={Cargando}
                    onClick={leer}
                    >
                        Leer Valores
                    </Button>
                </Box>
                
                <Box m={5}>
                    <Button
                    variant='contained'
                    type='update'
                    color='primary'
                    fullWidth

                    disabled={Cargando}
                    onClick={actualizar}
                    >
                        Actualizar Valores
                    </Button>
                </Box>
                <Box m={5}>
                    <Button
                    variant='contained'
                    type='delete'
                    color='primary'
                    fullWidth
                    disabled={Cargando}
                    onClick={borrar}
                    >
                        Borrar Valores
                    </Button>
                </Box>
            </form>
        </>
    )
}
export default NombreApellido