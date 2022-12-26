import React, {useRef} from 'react';
import  PropTypes from 'prop-types'; 
import { Contactos } from '../../../models/contactos.class'
import { Idiomas } from '../../../models/idioma'

// Traes los propotipos


const AgregarC = ({add}) => {
 
    const nombreRef = useRef('');
    const ApellidoRef = useRef('');
    const levelRef = useRef(Idiomas.BASICO);

    function addContact(e){
        e.preventDefault(); //Cerramos el vento po defecto
        const nuevoContacto = new Contactos(
            nombreRef.current.value,
            ApellidoRef.current.value,
            false,
            levelRef.current.value
        );
        add(nuevoContacto);
    }
    return (
       <form onSubmit={addContact} className='d-flex justify-content-center align-items center mb-4  card' >
       <div className='form-outline 'style={{background: 'white', width: '450px', marginLeft: '100px'}}>
       <input ref={nombreRef} id='inputName' type='text' className='form-control form-control-lg'  required 
       autoFocus placeholder='Tu nombre Aqui :3' />

        <input ref={ApellidoRef} id='inputDes' type='text' className='form-control form-control-lg' style={{weight: '155px'}} required 
        placeholder='Tu crush Aqui :x' />

        <label htmlFor='selectLevel' className='sr-only'>NIVE DE INGLES:</label>
        <select ref={levelRef} defaultValue = {Idiomas.BASICO} id='selectLevel'>
            <option value={Idiomas.BASICO}>
                BASICO
            </option>

            <option value={Idiomas.INTERMEDIO}>
                INTERMEDIO
            </option>

            <option value={Idiomas.ALTO}>
               ALTO
            </option>
            <option value={Idiomas.AVANSADO}>
               AVANSADO
            </option>

        </select>
        <div style={{margin: '15px'}}>
        <button type='submit' className='btn btn-success btn-lg ms-3 ' style={{height: '55px'}}>ADD</button>
        <button type='reset' className='btn btn-warning btn-lg ms-2 ' style={{height: '55px'}}>RESET</button>
       </div>   
       </div>
       
           
       </form>
    );
}
AgregarC.Prototype ={
    add: PropTypes.func.isRequired
}
export default AgregarC;

