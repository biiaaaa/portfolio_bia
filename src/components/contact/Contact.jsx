import React from "react";
import "./contact.css";


const Contact = () => {
    return(
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Entre em Contato!</h2>
            <br></br>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Vamos conversar sobre tudo!</h3>

                    <p className="contact__details">Se não gostar de me escrever por aqui, me mande um email 🤳🏼.
                    </p>

                    <p className="contact__button">Caso queria me enviar uma mensagem, cline no ícone de círculo 🔘, ao lado das minhas redes sociais na 'home'</p>
                    <p className="contact__git">Para ver meus trabalho, clique no ícone do Github na 'home'</p>
                </div>
            </div>
        </section>
    )
}

export default Contact;