import React from 'react';
import "./home.css";
import bia2 from "../assets/bia2.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return(
        <section className="home container" id="home">
            <div className='intro'>
                <img src={bia2} alt="" className="home__img" />
                <h1 className='home__name'>Ana Beatriz Stopa</h1>
                <span className='home__education'>Estudante de Desenvolvimento de Sistemas</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Me visite</a>

                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home