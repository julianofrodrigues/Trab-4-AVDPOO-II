import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import {  FiArrowLeft } from 'react-icons/fi';
import Logo from '../../assets/logo.png';


import { Container } from './styles';

import { useHistory, useLocation } from 'react-router-dom';


const Detail: React.FC = () => {

    return(
        <Container>
            <header>
                <img src={Logo} alt="username" />

                <span>Detalhes do Exame</span>

                <a href="/">
                <FiArrowLeft />
                    Voltar
                </a>
            </header>

        <div className="detail">

        <fieldset>
          <legend>
            <h2>Dados do Exame</h2>
          </legend>
          

          <label>Nome do Medico:</label>
          <p>Lucas</p>
          <label>Especialidade</label>
          <p>Sangue</p>
          <label>Nome do Paciente:</label>
          <p>Juliano</p>
          <label>Data do Exame:</label>
          <p>20/12/2020</p>
          <label>Horario do Exame:</label>
          <p>10:30</p>
        </fieldset>
        
      </div>
        </Container>
            
    );
}

export default Detail;