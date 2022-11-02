import React from 'react';
import { NavLink } from 'react-router-dom';
import BatFleche from '../assets/logos/logo_bat_flèche.png';
import BatFleche2 from '../assets/logos/logo_bat_flèche_2.png';
import Facebook from '../assets/logos/icon_facebook.png';
import Instagram from '../assets/logos/icon_ig.png';
import Twitter from '../assets/logos/icon_tw.png';
import '../styles/AsideRight.css';

function asideRight() {
  return (
    <div className="aside">
        <div className="aside-item">
            <div className="content allLogos">
                <NavLink to={'#survole-haut'} className="survole"><img className="logoAside" src={BatFleche} alt="flèche pour remonter en haut" /></NavLink>
            </div>
            <div className="content">
                <NavLink to={'#'}> <img className="logoAside effet_jaune allLogos" src={Facebook} alt="" /></NavLink>
            </div>
            <div className="content">
                <NavLink to={'#'}> <img className="logoAside effet_jaune allLogos" src={Instagram} alt="" /></NavLink>
            </div>
            <div className="content">
                <NavLink to={'#'}> <img className="logoAside effet_jaune allLogos" src={Twitter} alt="" /></NavLink>
            </div>
            <div className="content">
                <NavLink to={'#survole_pied'} className="survole "><img className="logoAside allLogos" src={BatFleche2} alt="flèche pour aller vers footer" /></NavLink>
            </div>
        </div>
    </div>
  )
}

export default asideRight