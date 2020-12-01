import React, { useState, useEffect, ChangeEvent } from "react";
import { FiArrowLeft } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import Button from "../../components/Button";
import Input from '../../components/Input'
import { Container } from './styles';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Doctor, Patient, Appointment } from "../../services/interfaces";
import api from '../../services/api';

interface CardParams {
  id: string;
}

const Edit: React.FC = () => {
 
  const history = useHistory();
  const [appointment, setAppointment] = useState<Appointment>();
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedPatient, setSelectedPatient] = useState('');
  const [doctor, setDoctor] = useState<Doctor[]>([]);
  const [patient, setPatient] = useState<Patient[]>([]);
  const { params } = useRouteMatch<CardParams>();

  function handleSelectDoctor(event: ChangeEvent<HTMLSelectElement>) {
    const res = event.target.value;

    setSelectedDoctor(res);
  };

  function handleSelectPatient(event: ChangeEvent<HTMLSelectElement>) {
    const res = event.target.value;

    setSelectedPatient(res);
  };

  const load = async () => {
    await api
      .get('doctors')
      .then(({ data }) => {
        setDoctor(data.docs)
      })
    await api
      .get('patients')
      .then(({ data }) => {
        setPatient(data.docs)
      })
    await api
      .get('appointments/' + params.id)
      .then(({ data }) => {
        setAppointment(data)
      })
  }
  useEffect(() => {
    load()}, [params.id])

    async function handleSubmit(data: Appointment) {
      try {
        const schema = Yup.object().shape({
          date: Yup.string().required('Data do exame obrigatório'),
          time: Yup.string().required('Hora do exame obrigatório'),
        });

        await schema.validate(data, {
            abortEarly: false
        });

        let body = {
          doctor_id: selectedDoctor,
          patient_id: selectedPatient,
          date: data.date,
          time: data.time
        }
        
        try {
            await api({
                method: 'put',
                url: 'appointments/' + params.id,
                data: body,
                headers: {'Content-Type': 'application/json' }
                })

            alert('Cadastro efetuado com sucesso.')

            history.push('/')
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

              <span>Cadastro de Exames</span>

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
        <select
          value={selectedDoctor}
          onChange={handleSelectDoctor}
        >
          <option>Selecione o Medico</option>
        {
          doctor.length > 0
          ? doctor.map((o) => {
              return (
                <option key={o._id} value={o._id}>{o.name}</option>
              )
            })
          : <option>Nenhum Medico encontrado</option>
        }
        </select>
         <p hidden>Especialidade: </p>
         <select
            value={selectedPatient}
            onChange={handleSelectPatient}
          >
          <option>Selecione o Paciente</option>
        {
          patient.length > 0
          ? patient.map((o) => {
              return (
                <option key={o._id} value={o._id}>{o.name}</option>
              )
            })
          : <option>Nenhum Paciente encontrado</option>
        }
        </select>

         <Input name="date" type="date" placeholder="Data do Exame" />
         <Input name="time" type="time" placeholder="Hora do Exame" />

         
      </fieldset>
      <Button type="submit">
        Cadastrar
      </Button>
    </Form>
      </Container>
          
  );
}

export default Edit;