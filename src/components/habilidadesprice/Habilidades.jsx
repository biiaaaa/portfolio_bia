import React from "react";
import './habilidades.css';
import sunflower80 from "../assets/sunflower80.png";
import cyano80 from "../assets/cyano80.png";
import code2 from "../assets/code2.png"

const Habilidades = () => {
    return (
       <section className="pricing container section" id="habilidades">
        <h2 className="section__title">Habilidades</h2>
        <br></br>

        <div className="pricing__container grid">
            <div className="pricing__item">
                <img src={sunflower80} alt="" className="pricing__img" />
                <h3 className="pricing__plan">Interpessoais</h3>
                <p className="pricing__title">Já me falaram, e eu também me considero uma pessoa proativa, 
                comunicativa, criativa, resiliente e entre outros</p>
               
            </div>

            <div className="pricing__item">
                <img src={code2} alt="" className="pricing__img" />
                <h3 className="pricing__plan">Linguagens de Programação</h3>
                <p className="pricing__title"> PHP, Python, C#, CSS, Java, React, React-native, HTML e MySQL</p>
                <p className="pricing__support"> saindo do básico, em desenvolvimento</p>
               
            </div>

            <div className="pricing__item">
                <img src={cyano80} alt="" className="pricing__img" />
                <h3 className="pricing__plan">Outras</h3>
                <p className="pricing__title">Pacote Office (básico), Pacote G Suite, Inglês Fluente (Nível B2 - TOEFL)</p>
                <p className="pricing__support">gerais</p>
               
            </div>

        </div>
       </section>
    )
}
export default Habilidades