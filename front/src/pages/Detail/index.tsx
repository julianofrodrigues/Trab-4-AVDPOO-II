import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { FiPower, FiArrowLeft } from 'react-icons/fi';
import TestPerfil from '../../assets/pefil-example.png';
import { HiOutlineDocument } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import Button from "../../components/Button";
import Input from '../../components/Input'
import { Container } from './styles';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import { Event } from "../../services/interfaces";
import api from '../../services/api';
import { useCookies } from 'react-cookie';

const Detail: React.FC = () => {

 
  const history = useHistory();
  

  

    return(
        <Container>
            <header>
                <img src={TestPerfil} alt="username" />

                <span>Detalhes do Exame</span>

                <a href="/profile">
                <FiArrowLeft />
                    Voltar
                </a>

                <button>
                <FiPower size={18} color="#FFF" />  
                </button>
            </header>

        <div className="detail">

        <fieldset>
          <legend>
            <h2>Dados do Exame</h2>
          </legend>
          <div>
            <img src={TestPerfil} alt="foto do paciente" />
          </div>

          <label>Nome do Paciente:</label>
          <p>Juliano</p>
          <label>Tipo de Exame:</label>
          <p>Sangue</p>
          <label>Data do exame:</label>
          <p>20/12/2020</p>
          <label>Vencimento do exame:</label>
          <p>30/12/2020</p>
        </fieldset>
        
      </div>
        </Container>
            
    );
}

export default Detail;