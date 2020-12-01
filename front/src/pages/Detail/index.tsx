import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import {  FiArrowLeft } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import { Container } from './styles';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Doctor, Patient, Appointment } from "../../services/interfaces";
import api from '../../services/api';

interface CardParams {
  id: string;
}

const Detail: React.FC = () => {
  const history = useHistory();
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedPatient, setSelectedPatient] = useState('');
  const [doctor, setDoctor] = useState<Doctor[]>([]);
  const [patient, setPatient] = useState<Patient[]>([]);
  const { params } = useRouteMatch<CardParams>();

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
          <p>{ appointment ? appointment.doctor.name : null }</p>
          <label>Especialidade</label>
          <p>{ appointment ? appointment.doctor.specialty : null }</p>
          <label>Nome do Paciente:</label>
          <p>{ appointment ? appointment.patient.name : null }</p>
          <label>Data do Exame:</label>
          <p>{ appointment ? appointment.date : null }</p>
          <label>Horario do Exame:</label>
          <p>{ appointment ? appointment.time : null }</p>
        </fieldset>
        
      </div>
        </Container>
            
    );
}

export default Detail;