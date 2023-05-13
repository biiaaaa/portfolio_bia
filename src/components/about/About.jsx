import React from "react";
import "../about/about.css";
import cereja150 from "../assets/cereja150.png";

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">Sobre Mim</h2>
<br/>
            <div className="about__container grid">
                <img src={cereja150} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">Olá! Sou a Ana Beatriz Oliveira Stopa,
                    mas todos me chamam somente de Bia. Atualmente sou estudante de Desenvolvimento 
                    de Sistemas na ETEC (Ermelinda Giannini Teixeira), onde procuro me desenvolver 
                    nos conhecimentos de TI e conseguir me encontrar na área. Além disso, sou curiosa
                    e adoro colecionar novas experiências</p>
                    <br></br>
                        <a href="https://www.canva.com/design/DAFgq_c5zpc/-wOjJHaZYOWF7cHCR8taEA/edit?utm_content=DAFgq_c5zpc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="btn">Ver Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About