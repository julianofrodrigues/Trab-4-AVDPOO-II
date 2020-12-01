import React, { useState, useEffect  } from "react";
import { FiArchive, FiEdit, FiTrash2 } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import { Container } from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { Appointment } from "../../services/interfaces";

const Index: React.FC = () => {
    const history = useHistory();
    const [data, setData] = useState<Appointment[]>([]);

    const load = async () => {
        await api
          .get('appointments')
          .then(({ data }) => {
            setData(data.docs)
          })
    }
    useEffect(() => {
      load()}, [])

      const handleDetail = async (codigo: String) => {
        history.push('/detail/' + codigo)
      }

      const handleEdit = async (codigo: String) => {
        history.push('/edit/' + codigo)
      }
  
      const handleDelete = async (codigo: String) => {
          try {
              await api.delete(`appointments/${codigo}`)
  
              alert('Cadastro deletado com sucesso.')
              load()
  
          } catch (err) {
              alert('Erro ao deletar registro.')
          }
      }
  
      return(
        <Container>
            <header>
                <img src={Logo}  alt="name" />
                <a href="/new">Cadastrar Exames</a>
            </header>

            <h1>Exames Cadastrados</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Medico</th>
                            <th>Nome do Paciente</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0
                            ? data.map((o) => {
                                return (
                                    <tr key={o._id}>
                                        <td>{o.doctor.name}</td>
                                        <td>{o.patient.name}</td>
                                        <td>
                                            <button className="actionDetailBtn" onClick={() => { handleDetail(o._id) }}>
                                                <FiArchive size={18} color="#FFF" />  
                                            </button>
                                            <button className="actionEditBtn" onClick={() => { handleEdit(o._id) }}>
                                                <FiEdit size={18} color="#FFF" />  
                                            </button>
                                            <button className="actionDelBtn" onClick={() => { handleDelete(o._id) }}>
                                                <FiTrash2 size={18} color="#FFF" />  
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            : <tr/>
                        }
                    </tbody>
                     
                </table>
            </div>
        </Container>
            
    );
}

export default Index;