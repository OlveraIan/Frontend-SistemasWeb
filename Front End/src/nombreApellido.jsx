import {TextField,Box,Button} from '@mui/material';
import React,{useEffect,useState} from 'react';


function NombreApellido() {
    
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] =useState({
        nombre:'',
        apellido:''
    })

    const crear = async (evento) => {
        evento.preventDefault()
        console.log("Datos recuperados del formulario", datosFormulario)
    }
    const leer = async (evento) => {
        evento.preventDefault()
        console.log("Datos leidos", datosFormulario)
    }
    const actualizar = async (evento) => {
        evento.preventDefault()
        console.log("Datos actualizados", datosFormulario)
    }
    const borrar = async (evento) => {
        evento.preventDefault()
        console.log("Datos borrados", datosFormulario)
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