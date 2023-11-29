import {TextField,Box,Button} from '@mui/material';
import React,{useEffect,useState} from 'react';
import axios from "axios";

function NombreApellido() {
    
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] =useState({
        nombre:'',
        apellido:''
    })

    const hacerPeticion = async () =>{
        try {
            const response = await axios.post('http://localhost:4567/users/')
            console.log(response.data)
            return response.data
        } catch (error) {
            throw error
            
        }
    } 

    const crear = async (evento) => {
        evento.preventDefault()
        console.log("Datos recuperados del formulario", datosFormulario)
        try {
            const response = await hacerPeticion()
            console.log("salida",response.nombre)
            setCargando(false)

        } catch (error) {
            
        }
    }
    const leer = async (evento) => {
        evento.preventDefault()
        console.log("Datos leidos", datosFormulario)
        try {
            
        } catch (error) {
            
        }
    }
    const actualizar = async (evento) => {
        evento.preventDefault()
        console.log("Datos actualizados", datosFormulario)
        try {
            
        } catch (error) {
            
        }
    }
    const borrar = async (evento) => {
        evento.preventDefault()
        console.log("Datos borrados", datosFormulario)
        try {
            
        } catch (error) {
            
        }
    }

    const cambiosFormulario = (evento) => {
        const {name, value} = evento.target
        setDatosFormulario({...datosFormulario,[name]:value})
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
                    <TextField
                    label= 'Id:'
                    variant='outlined'
                    fullWidth
                    /* en cambios al formulario, actualizar los datos del portador de los datos */
                    onChange = {cambiosFormulario}
                    name= 'idLeer'
                    >
                    </TextField>
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
                    <TextField
                    label= 'Id:'
                    variant='outlined'
                    fullWidth
                    /* en cambios al formulario, actualizar los datos del portador de los datos */
                    onChange = {cambiosFormulario}
                    name= 'idActualizar'
                    >
                    </TextField>
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
                <Box m={5}>
                    <TextField
                    label= 'Id:'
                    variant='outlined'
                    fullWidth
                    /* en cambios al formulario, actualizar los datos del portador de los datos */
                    onChange = {cambiosFormulario}
                    name= 'idBorrar'
                    >
                    </TextField>
                </Box>
            </form>
        </>
    )
}
export default NombreApellido