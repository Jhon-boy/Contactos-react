import React , {useEffect}from 'react';
import PropTypes from 'prop-types'; 
import { Contactos } from '../../models/contactos.class'
import { Idiomas } from '../../models/idioma'

const ContactosComponent = ({contacto, casado, remove}) => {
    useEffect(() => {
        console.log('Tarea Creada');
        return () => {
             console.log(`contacto ${contacto.nombre} going to unmount`);
        };
     }, [contacto]);

     function contactolevelBadge(){
        switch(contacto.level){
            case Idiomas.BASICO:
                return(<h6 className='mb-0'>
                <span className='badge bg-primary'>
                    {contacto.nivel}
                </span>

                </h6>)
      
                case Idiomas.INTERMEDIO:
                    return(<h6 className='mb-0 '>
                    <span className='badge bg-warning'>
                        {contacto.nivel}
                    </span>
    
                    </h6>)
                       case Idiomas.AVANSADO:
                        return(<h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {contacto.nivel}
                        </span>
        
                        </h6>);
                        default:
                        break;

                        
                    
        }

     }
     function  contactoCasadoIcon(){
        if(contacto.casado){
            return (<i onClick={() =>casado(contacto)} className ='bi-toggle-on contacto-action' style={{color: 'green'}}></i>)
        } else{
            return(<i  onClick={() =>casado(contacto)} className='bi-toggle-off contacto-action'style={{color: 'grey'}}></i>)
        }
    }





    return (
        <tr className='fw-normal'>
        <th> 
            <span className='ms-2'> {contacto.nombre}</span>
        </th>
        <td className='align-middle' >
        <span className='ms-2'> {contacto.apellido }</span>
        </td>

        <td className='align-middle'>
        <span>{contacto.nivel}</span>
    {/* <span > {task.level }</span> */}
          {contactolevelBadge(contacto.nivel)}
        </td>
        
        <td className='align-middle'>
         {contactoCasadoIcon()}
        </td>
        
        <td className='align-middle'>
         <i className ='bi-trash contacto-action' onClick={() => remove(contacto)} style={{color: 'tomato'}}></i>
        </td>

    </tr>
    );
}
ContactosComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contactos).isRequired,
    casado: PropTypes.func.isRequired, //Revisa que no sea una tarea
    remove: PropTypes.func.isRequired
};

export default ContactosComponent;
