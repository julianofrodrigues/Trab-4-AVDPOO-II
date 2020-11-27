import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { FiArrowLeft } from 'react-icons/fi';
import Logo from '../../assets/logo.png';

import Button from "../../components/Button";
import Input from '../../components/Input'
import { Container } from './styles';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';
import { Event } from "../../services/interfaces";
import api from '../../services/api';
import { useCookies } from 'react-cookie';

const Edit: React.FC = () => {

 
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  async function handleSubmit(data: Event) {
      try {
        const schema = Yup.object().shape({
          event_name: Yup.string().required('Nome do evento obrigatório'),
        });

        await schema.validate(data, {
            abortEarly: false
        });

        console.log(data)
        const place = ''
        let bodyFormData = new FormData();
        bodyFormData.set('event_name', data.event_name);
        bodyFormData.set('district', data.district);
        bodyFormData.set('street', data.street);
        bodyFormData.set('number', data.number);
        bodyFormData.set('commentary', data.commentary);
        bodyFormData.set('user_id', cookies.user._id);
        

        try {
            await api({
                method: 'post',
                url: 'events',
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
                })

            alert('Cadastro efetuado com sucesso.')

            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar seus dados.')
        }
    } catch ( error ) {
        console.log(error)
    }
  }

    return(
        <Container>
            <header>
                <img src={Logo} alt="username" />

                <span>Edição de Exames</span>

                <a href="/">
                <FiArrowLeft />
                    Voltar
                </a>
            </header>

        <Form onSubmit={handleSubmit}>

        <fieldset>
          <legend>
            <h2>Dados do Exame</h2>
          </legend>
          <select>
            <option>Selecione um Medico</option>
          </select>
           <p>Especialidade: </p>
           <select>
            <option>Selecione o  Paciente</option>
          </select>

           <Input type="date" name="validate"  placeholder="Data do Exame" />
           <Input type="time" name="validate"  placeholder="Data do Exame" />

           
        </fieldset>
        <Button type="submit">
          Editar
        </Button>
      </Form>
        </Container>
            
    );
}

export default Edit;