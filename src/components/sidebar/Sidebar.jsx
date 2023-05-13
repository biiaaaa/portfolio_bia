import React from 'react';
import "./sidebar.css";
import logob from "../assets/logob.png"

const Sidebar = () => {
    return(
       <aside className='aside'>
        <a href="#home" className="nav__logo">
            <img src={logob} alt="" />
        </a>

        <nav className='nav'>
            <div className='nav_menu'>
                <ul className='nav_list'>
                    <li className='nav_item'>
                        <a href='#home' className='nav__link'>
                            <i className="icon-home"></i>
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#about' className='nav__link'>
                        <i className="icon-user-following"></i>
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#education' className='nav__link'>
                        <i className="icon-graduation"></i>
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#habilidades' className='nav__link'>
                        <i className="icon-energy"></i>
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#expe' className='nav__link'>
                        <i className="icon-layers"></i>
                        </a>
                    </li>



                    <li className='nav_item'>
                        <a href='#contact' className='nav__link'>
                        <i className="icon-bubble"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="nav__footer">
            <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
       </aside>
    )
}

export default Sidebar