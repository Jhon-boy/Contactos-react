import React, {useState , useEffect} from 'react';
import { Contactos } from '../../models/contactos.class'
import { Idiomas } from '../../models/idioma'

import ContactComponent from '../pure/contactos'
import AgregarC from '../pure/form/agregarC';

// import ContactForm from '../pure/form/agregarC'



const ContactosLista = () => {
  //  const defaultcontact = new contact('Example', 'Default description', true, Levels.NORMAL);
  const defaultContact = new Contactos('John', 'BOY', false, Idiomas.BASICO)
  const defaultContact2 = new Contactos('Nataly', 'M-H', true, Idiomas.INTERMEDIO)
  const defaultContact3 = new Contactos('SASS', 'S-CSS', true, Idiomas.INTERMEDIO)
  const defaultContact4 = new Contactos('REACT', 'JS', false, Idiomas.INTERMEDIO)

  // Estado del contacto
  const [contacts, setContacts] = useState([defaultContact, defaultContact2,defaultContact3,defaultContact4]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    console.log('contact State has benn modified')
 
    setLoading(false);
     return () => {
         console.log('contact list component is going to unMount...')
     };
 }, [contacts]);


//  function completecontact(contact){
//     console.log('Complete this contact; ', contact);
//     const index = contacts.indexOf(contact);
//     const tempcontact = [...contacts];
//     tempcontact[index].completed = ! tempcontact[index].completed;
//     //We update the state of the component with the new will update the iteration 
//     //of the contact in order to show the contact updated
//     setcontacts(tempcontact); // Actualziamos el texto
//  } 
function completeContact(contact){
    console.log('Complete this contact; ', contact);
    const index = contacts.indexOf(contact);
    const tempcontact = [...contacts];
    tempcontact[index].casado = ! tempcontact[index].casado;
    //We update the state of the component with the new will update the iteration 
    //of the contact in order to show the contact updated
    setContacts(tempcontact); // Actualziamos el texto
 }

 //Eliminamos el contacto

 function deleteContacts(contact){
    console.log('Complete this contact; ', contact);
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact.splice(index, 1);
    setContacts(tempContact); // Actualziamos el texto
 }
 // AÑADIMOS UN CONTACTO

 function addContact(contact){
    console.log('Complete this Task; ', contact);
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact.push(contact);
    setContacts(tempContact);

 }
 
    return (
        <div>
        <div className='col-12'>
        <div className='card'>
            <div className='card-header p-3'>
            <h5>   INFORMACION </h5>

            </div>
            {/* Card Body */}
            <div className='card-body' data-mdb-perfect-scrollbar ='true' style={{position: 'relative', height: '400px'}}>
                <table class="table table-striped-columns">
                <thead>
                      <tr> 
                   <th scope='col '>NOMBRE</th>
                   <th scope='col'>APELLIDO</th>
                   <th scope='col'>INGLES</th>
                   <th scope='col'>EN LINEA</th>
                   <th scope='col'>ELIMINAR</th>

                    </tr>
                </thead>
                <tbody>
                    {/* Iterar sobre una lista de tareas ,
                    1. Hacemos un mapeo
                    2. Recibimos un paramtro
                    3. Fcuntion callback
                    4. returnamos segun lo recibido */}
                    {
                        contacts.map((contact, index) =>{
                            return(
                                 <ContactComponent 
                                   key={index}
                                   contacto = {contact}
                                   casado ={completeContact}
                                   remove = {deleteContacts}
                                   >

                                  </ContactComponent>
                            )
                        })
                    }

                   

                </tbody>
                  
                </table>

            </div>
           
        </div>

        <AgregarC add={addContact}></AgregarC>
        </div>
         {/* <ContactForm add={addContact}></ContactForm> */}
        {/* TODO: aplicar un For o un MAP para renderizar una lista */}
        {/* <ContactComponent task = {defaultTask}></ContactComponent> */}
    </div>
    );
}

export default ContactosLista;
