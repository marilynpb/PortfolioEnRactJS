import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contacto.css'
import Button from './Button'

export const FormContactoMailer = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d1qiaj7', 'template_p30fgpc', form.current, 'cc8QZlANN2rnXaa-i')
        .then((result) => {
            console.log(result.text);
            document.getElementById('user_name').value=""
            document.getElementById('user_email').value=""
            document.getElementById('user_message').value=""
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <div className='formulario'>
        <form className="form-email" ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" id="user_name" placeholder="Ingrese su Nombre"/>
            <input type="email" name="user_email" id="user_email" placeholder="Ingrese su Email"/>
            <input type="text" name="user_message" cols="30" rows="10" id="user_message" placeholder="Mensaje" class="comentario"/>
            <Button valor="Enviar" type="submit" estilo={{color:"#f43831"}}/>            
        </form>
        </div> 
    )
}

export default FormContactoMailer



