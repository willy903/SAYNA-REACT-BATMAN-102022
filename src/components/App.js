import React from 'react';
import '../styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.js';
import Game from '../pages/Game.js';
import Eshop from '../pages/Eshop.js';
import MonCompte from '../pages/MonCompte.js';
import NotFound from '../pages/NotFoundPages.js';
import Layout from '../pages/Layout';


function App() {
   

    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}> 
                        <Route index element={<Home/>} />
                        <Route path='home' element={<Home/>} />
                        <Route path='game' element={<Game/>} />
                        <Route path='eshop' element={<Eshop/>} />
                        <Route path='MonCompte' element={<MonCompte/>} />
                        <Route path='*' element={<NotFound/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;