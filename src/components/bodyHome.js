import React from 'react';
import { NavLink } from 'react-router-dom';
import flechDown from '../assets/logos/flèche_down_header.png' ;
import rond from '../assets/Home/rond.png';
import bathome from '../assets/Home/Bathome2.png'
import bathome3 from '../assets/Home/Bathome3.png'
import bathome4 from '../assets/Home/Bathome4.png'
import bathome5 from '../assets/Home/Bathome5.png'
import bathome6 from '../assets/Home/Bathome6.png'
import bathome7 from '../assets/Home/Bathome7.png'
import bathome8 from '../assets/Home/Bathome8.png'
import bathome9 from '../assets/Home/Bathome9.png'
import bathome10 from '../assets/Home/Bathome10.png'
import bathome11 from '../assets/Home/Bathome11.png'
import bathomeba1 from '../assets/Home/Bathome_ba1.png'
import bathomeba2 from '../assets/Home/Bathome_ba2.png'
import flech1 from '../assets/logos/icon_flèche_1.png'
import fleche2 from '../assets/logos/icon_flèche_2.png'
import iconPlayer from '../assets/logos/icon_player.png'





import '../styles/BodyHome.css';
function bodyHome() {
  return (
    <div className='bg_add'>
        <div className="allBorder">
        <div className="container_a">
            <p className="container_paragraphe">
                Au nom de ses parents assassinés, Bruce Wayne mène une guerre éternelle contre les criminels de Gotham City. Il est vengeur. Il est la nuit.
            </p>
            <h2 className="title_batman">Il est Batman.</h2>
            <div className="container_grpButton">
                <NavLink to="#batcine">VOIR LES HEROS</NavLink>
                <NavLink to="#nemesis">VOIR LES ADVERSAIRE</NavLink>
                <div className="container_flecheDown">
                    <img src={flechDown} alt="flèche vers le bas"/>
                </div>
            </div>
        </div>
        <div className="box">
            <div className="box_paragraphe" id="batcine">
                <h1>BATMAN AU CINÉMA</h1>
                <p>
                    Le personnage de Batman est un super héros de l’univers de DC Comics. Il NavLink été créé par le dessinateur Bob Kane et le scénariste Bill Finger et apparaît pour la première fois dans le comic book Detective Comics en 1939. Batman se différencie de Superman,
                    alors héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au cinema pour la première fois en 1943 par Lewis Wilson et bénéficiera de nombreux reboot, donnant l’occasion à de multiples acteurs d’interpréter l’homme chauve-souris.
                    Voici les trois derniers :
                </p>
            </div>
            <div className="box_card">
                <div className="card-item">
                    <div className="item">
                        <img src={bathome} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <img src={rond} alt="" width="40px" height="auto"/>
                                <h6>Robert Pattinson (2022)</h6>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-item">
                    <div className="item">
                        <img src={bathome3} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <div className="acteur">
                                    <img src={rond} alt="" width="40px" height="auto"/>

                                    <h6>Christian Bale (2006 2008 2012)</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-item">
                    <div className="item">
                        <img src={bathome4} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <img src={rond} alt="" width="100%" height="auto"/>
                                <h6>Ben Affleck 20016- 2017/2020 2023</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="box" id="nemesis">
            <div className="box_paragraphe">
                <h1>NÉMÉSIS</h1>
                <p>
                    Batman souhaite éradiquer la criminalité de Gotham. C’est pourquoi, il affrontera la plupart du temps, des vilains sans capacités surnaturelles mais particulièrement violents ou psychopathes. Avec son introduction dans la Justice League il aura l’occasion
                    de se mesurer à des antagonistes qui défient l’imagination et les lois de la physique. Parmi les derniers ennemis emblématiques que nous avons pu voir au cinéma, on retrouve :
                </p>
            </div>
            <div className="box_card caherOUI">
                <div className="card-item">
                    <div className="item">
                        <img src={bathome5} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <img src={rond} alt="" width="40px" height="auto"/>
                                <h6>The Riddler Paul Dano(2022)</h6>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-item">
                    <div className="item">
                        <img src={bathome6} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <div className="acteur">
                                    <img src={rond} alt="" width="40px" height="auto"/>

                                    <h6>Le Joker Heath Ledger(2008)</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-item">
                    <div className="item">
                        <img src={bathome7} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <img src={rond} alt="" width="100%" height="auto"/>
                                <h6>Darkseid Ray Porter(2022)</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="box">
            <div className="box_paragraphe">
                <h1>ALLIES</h1>
                <p>
                    Alfred est le majordome des Wayne. NavLink leur mort il s’occupe de l’éducation du jeune Bruce avant de l’assister dans son rôle du Batman. Ce dernier rencontrera Catwoman dès le premier numéro des aventures de l’homme-chauve souris en 1940. Tantôt ennemie
                    tantôt alliée la jeune femme fatale fera tourner la tête de Batman à maintes reprises. Du côté de la police, Bruce pourra compter sur l’aide infaillible de James Gordon, “Jim , qui désire lui aussi nettoyer sa ville de la criminalité
                    qui y règne.
                </p>
            </div>
            <div className="box_card caherOUI">
                <div className="card-item">
                    <div className="item">
                        <img src={bathome9} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <img src={rond} alt="" width="40px" height="auto"/>
                                <h6>Alfred Pennyworth Michael Cain(2006 2008 2012)</h6>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-item">
                    <div className="item">
                        <img src={bathome8} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <div className="acteur">
                                    <img src={rond} alt="" width="40px" height="auto"/>

                                    <h6>Catwoman Zoé Kravitz(2008)</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-item">
                    <div className="item">
                        <img src={bathome10} alt="" width="100%" height="auto"/>
                        <div className="item_actor">
                            <div className="acteur">
                                <img src={rond} alt="" width="100%" height="auto"/>
                                <h6>James Gordon(2014 2019)</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="box">
            <div className="box_paragraphe">
                <h1>JUSTICE LEAGUE</h1>
                <p>
                    Lorsque la Terre est menacée les plus grands super-héros s’allient pour la protéger. Ils doivent cependant apprendre à se faire confiance mutuellement et à faire équipe ce qui ne sera pas chose aisée. Ensemble ils forment la Justice League, les plus grands
                    superhéros de la Terre, ceux vers qui le monde entier se tourne lorsque les menaces extraterrestres ou surnaturelles menacent son existence.
                </p>
            </div>
        </div>
    </div>

    <div className="justiceLeague">
        <img src={bathome11} alt="" width="100%" height="auto"/>
    </div>
    <div className="allBorder2">
        <div className="Mutli">
            <h1 className="txt_presentation">MULTIMÉDIA</h1>
            <div className="cart_faddin">
                <div className="controle">
                    <img src={flech1} alt="" />
                </div>
                <div className="controle">
                    <div className="cart1">
                        <img src={bathomeba1} alt="" />
                        <div className="article">
                            <h1>Action, Adventure</h1>
                            <h2>Batman Begins</h2>
                            <h3>IMDB: <span>8.2</span></h3>
                            <p>
                                Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De
                                retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="controle">
                    <img src={fleche2} alt="" />
                </div>
            </div>
            <div className="bande_annonce">
                <img src={bathomeba2} alt="" width="100%" height="auto" />
                <img src={iconPlayer} alt="" width="100%" height="auto" className="iconPlayer" />
            </div>
        </div>
    </div>
    <div className="contact">
        <div className="contact-bloc">
            <form action="">
                <h1>PRENONS CONTACT</h1>
                <label htmlFor="mail" className="label1">ADDRESSE EMAIL</label>
                <input type="text" id="mail" placeholder="Addresse email"/>
                <h3>NEWSLETTER</h3>
                <label htmlFor="nws" className="label2">En cochant cette case vous acceptez de recevoir l’actualité concernant les
            aventures de Batman : <input type="checkbox" id="nws"/></label>
                <div className="dropdown">
                    <input type="text" className="dropdown-in" disabled placeholder="Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter"/>
                    <div className="dropdown-content">
                        <NavLink to="#">Link 1</NavLink>
                        <NavLink to="#">Link 2</NavLink>
                        <NavLink to="#">Link 3</NavLink>
                    </div>
                </div>
                <p>Souhaitez vous recevoir des news </p>
                <div className="btn-groupe">
                    <button className="allLogos">Des films</button><button className="allLogos">Des comics</button><button className="allLogos">De tout</button>
                </div>
                <h3>MESSAGE</h3>
                <textarea name="" id=""  placeholder="Laissez un commentaire pour la communauté"></textarea>
                <div className="bloc-confirmer"><button className="confirmer allLogos">CONFIRMER</button></div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default bodyHome