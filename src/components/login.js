import React from 'react';
import '../styles/login.css';
import icon4 from "../assets/icones/icone_4.png";
import icon5 from "../assets/icones/icone_5.png";
import facebook from '../assets/logos/logo_4.1.png'
import google from '../assets/logos/logo_7.png'
import apple from '../assets/logos/logo_8.png'

function login() {
  return (
    <>
        <div className="container_count">
        <div className='border_count mx-auto'>
		<div className="d-flex justify-content-center">
			<div className="">
				<div className="d-flex justify-content-center user_card">
					<form>
                    <div className='text-center p-4'>
                        <h1>Connexion</h1>
                        <p>Vous n'avez pas encore de compte ?Inscrivez-vous!</p>
                    </div>
                    <div className='pb-4 px-5'>
                        <div className='bg-ajust-2 p-5'>
                        <label className='text-white mb-3'>Identifiant</label>
						<div className="input-group mb-3 border-ajust">
							<div className="input-group-append">
								<span className="input-group-text"><img src={icon4} className="brand_logo" alt="Logo"/></span>
							</div>
							<input type="text" name="" className="form-control input_user" placeholder="username"/>
						</div>
                        <label className='text-white mb-3'>Mot de passe</label>
						<div className="input-group mb-2 border-ajust">
							<div className="input-group-append">
								<span className="input-group-text"><img src={icon5} className="brand_logo" alt="Logo"/></span>
							</div>
							<input type="password" name="" className="form-control input_pass" placeholder="password"/>
						</div>
						<div className='d-flex justify-content-between'>
                            <span className='text-white'>Mot de passe oublié</span>
                            <span className='divider w-50 border_bas'></span>
                        </div>
						
				 	<button type="button" name="button" className="btn login_btn py-3 mt-3">VALIDER</button>
                     <div className='d-flex justify-content-between'>
                            <span className='text-white'>Connecter vous avec</span>
                            <span className='divider w-50 border_bas'></span>
                    </div>
                    <div className='d-flex flex-row bd-highlight mt-3'>
                            <div className='d-flex flex-column p-2'><img src={google} width="28px" alt=""/></div>
                            <div className='d-flex flex-column p-2'><img src={facebook} width="30px" alt=""/></div>
                            <div className='d-flex flex-column p-2'><img src={apple} width="40px" alt=""/></div>
                    </div>
                   </div>
                   </div>
					</form>
				</div>
			</div>
		</div>
	</div>
    </div>
    </>
  )
}

export default login